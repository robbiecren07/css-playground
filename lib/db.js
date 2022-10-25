import { initializeApp } from 'firebase/app'
import { doc, setDoc } from 'firebase/firestore'
import { db } from './firebase'

const firestore = db
const app = initializeApp

export function createUser(uid, data) {
  return setDoc(doc(firestore, 'users', uid), {
    ...data
  }, {
    merge: true
  })
}