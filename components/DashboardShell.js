import React from 'react'
import Link from 'next/link'
import Image from './Image'
import { useAuth } from '@/lib/auth'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import styles from '../styles/Dashboard.module.scss'

const DashboardShell = ({ children }) => {
  const { user, signout } = useAuth();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.dashboard_body}>

          <nav id="breadcrumb" className={styles.nav_links}>
            <Link href="/" passHref>
              <a>Home</a>
            </Link>
            <span> &gt; </span>
            <Link href="/dashboard" passHref>
              <a>Dashboard</a>
            </Link>
          </nav>

          <div>
            <Link href="/account" passHref>
              <a>
                {<Image
                  src={user?.photoUrl}
                  width="96"
                  height="96"
                  alt="profile avatar"
                /> || <Skeleton circle={true} height={96} width={96} />}
              </a>
            </Link>
          </div>

          <div>
            {children}
          </div>

          <div>
            <button className="button" onClick={signout}>
              Log Out
            </button>
          </div>

        </div>
      </div>
    </main>
  )
  
}

export default DashboardShell;