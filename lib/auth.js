import React, { useState, useEffect, useContext, createContext } from 'react'
import { initFirebase, auth } from './firebase'
import { useRouter } from 'next/router'
import cookie from 'js-cookie'
import { createUser } from './db'
import { getAuth, getIdToken, getIdTokenResult, GithubAuthProvider, GoogleAuthProvider, onIdTokenChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

const authContext = createContext()

export function AuthProvider({ children }) {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext)
}

function useProvideAuth() {
  initFirebase()

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const github = new GithubAuthProvider()
  const google = new GoogleAuthProvider()

  const handleUser = async (rawUser) => {
    if (rawUser) {
      const user = await formatUser(rawUser)
      const { token, ...userWithoutToken } = user

      createUser(user.uid, userWithoutToken)
      setUser(user)

      cookie.set('css-playground-auth', true, {
        expires: 1 / 24
      })

      setLoading(false)
      return user
    } else {
      setUser(false)
      cookie.remove('css-playground-auth')

      setLoading(false)
      return false
    }
  }

  const signinWithEmail = async (email, password) => {
    setLoading(true)
    const response = await signInWithEmailAndPassword(auth, email, password)
    handleUser(response.user)
    router.push('/dashboard')
  }

  const signinWithGitHub = async (redirect) => {
    setLoading(true)
    const response = await signInWithPopup(auth, github)
    handleUser(response.user)
    if (redirect) {
      router.push(redirect)
    }
  }

  const signinWithGoogle = async (redirect) => {
    setLoading(true)
    const response = await signInWithPopup(auth, google)
    handleUser(response.user)
    if (redirect) {
      router.push(redirect)
    }
  }

  const signout = async () => {
    router.push('/')

    await signOut(auth)
    setUser(false)
    return await handleUser(false)
  }

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged(handleUser)
    //const unsubscribe = onIdTokenChanged(auth, handleUser)
    return () => unsubscribe()
  }, [])

  return {
    user,
    loading,
    signinWithEmail,
    signinWithGitHub,
    signinWithGoogle,
    signout
  }
}

// const getStripeRole = async () => {
//   //const { currentUser } = auth
//   await  getIdToken(true)
//   const decodedToken = await getIdTokenResult()

//   return decodedToken.claims.stripeRole || 'free'
// }

const formatUser = async (user) => {
  const token = await user.getIdToken()
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    //stripeRole: await getStripeRole(),
    token
  }
}