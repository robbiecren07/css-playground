import { useState } from 'react'
import { useAuth } from '@/lib/auth'
import Layout from '@/components/Layout'

import styles from '../styles/Dashboard.module.scss'

const Account = () => {
  const { user, signout } = useAuth()
  const [isBillingLoading, setBillingLoading] = useState(false)

  return (
    <div className={styles.acct_wrap}>
      <div className={styles.acct_info}>
        <img width="96" height="96" src={user?.photoUrl} />
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
        <button className={styles.btn} onClick={() => signout()}>
          Log Out
        </button>
      </div>
    </div>
  )
}

const AccountPage = () => (
  <main className={styles.main}>
    <Account />
  </main>
)

export default AccountPage