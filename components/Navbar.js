import Link from "next/link"
import Image from 'next/image'
import logoImg from '../public/css-playground-logo-400.png'
import { useAuth } from "@/lib/auth"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/pro-regular-svg-icons'

import styles from '../styles/Header.module.scss'

const LoginIcon = () => {
  const { user } = useAuth();

  if (user) {
    return (
      <Link href="/account" passHref>
        <a className={styles.avatar} title="View Account">
          <Image
            src={user?.photoUrl}
            width="36"
            height="36"
            alt="account avatar"
          />
        </a>
      </Link>
    )
  }

  return (
    <Link href="/login" passHref>
      <a className={styles.acct} title="Log in to Account">
        <span>Log In</span>
      </a>
    </Link>
  )

}

const Navbar = () => {

  return (
    <>
      <header className={styles.head}>
        <nav className={styles.nav_bar}>

          <div className={styles.container}>
            <Link href="/" passHref>
              <a className={styles.nav_logo}>
                <Image
                  src={logoImg}
                  width="400"
                  height="67"
                  alt="A CSS Flex and Grid sandbox playgound"
                />
              </a>
            </Link>
            <div className={styles.nav_links}>
              <Link href="/flex-playgound" passHref>
                <a className={styles.nav_link} title="Flex Playground">
                  Flex Playground
                </a>
              </Link>
              <Link href="/grid-playgound" passHref>
                <a className={styles.nav_link} title="Grid Playground">
                  Flex Playground
                </a>
              </Link>

              <LoginIcon />
            </div>
          </div>

        </nav>
      </header>
    </>
  )

}

export default Navbar