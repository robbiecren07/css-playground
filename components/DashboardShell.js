import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { useAuth } from '@/lib/auth';

import styles from '../styles/Dashboard.module.scss'

const DashboardShell = ({ children }) => {
  const { user, signout } = useAuth();

  return (
    <main className={styles.main}>
      <div>
        <Link href="/" passHref>
          <a>Home</a>
        </Link>
        <Link href="/sites" passHref>
          <a>Sites</a>
        </Link>
        <button onClick={() => signout()}>
          Log Out
        </button>
      </div>

      <div>
        <Link href="/account" passHref>
          <a>
            <Image
              src={user?.photoUrl}
              width="96"
              height="96"
              alt="profile avatar"
            />
          </a>
        </Link>
      </div>

      <div>
        {children}
      </div>
    </main>
  )
  
}

export default DashboardShell;