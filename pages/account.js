import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo'
import { useAuth } from '@/lib/auth'
import Skeleton from 'react-loading-skeleton'
import Image from '@/components/Image'

import 'react-loading-skeleton/dist/skeleton.css'
import styles from '../styles/Dashboard.module.scss'

const Account = () => {
  const { user, signout } = useAuth()

  return (
    <div className={styles.acct_wrap}>
      <div className={styles.acct_info}>
        {<Image
          src={user?.photoUrl}
          width="96"
          height="96"
          alt="profile picture"
        /> || <Skeleton circle={true} height={50} width={50}/>}
        <h2>{user?.name || <Skeleton width={300} height={32} />}</h2>
        <p>{user?.email || <Skeleton width={300} height={16} />}</p>
        <button className="button" onClick={() => signout()}>
          Log Out
        </button>
      </div>
    </div>
  )

}

const AccountPage = () => {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
        router.push('/');
    }
  }, [user, loading]);

  return (
    <>
      <NextSeo noindex={true} nofollow={true} />
      <main className={styles.main}>
        <Account />
      </main>
    </>
  )

}

export default AccountPage