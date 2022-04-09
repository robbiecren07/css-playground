import NextLink from "next/link"
import Image from "./Image"
import { useRouter } from "next/router"
import logoImg from '../public/css-playground-logo-400.png'
import { useAuth } from "@/lib/auth"
import { useColorMode, Button, Link, Flex } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import Skeleton from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'
import styles from '../styles/Header.module.scss'

const DarkModeIcon = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  
  if (colorMode === 'light') {
    return (
      <Button onClick={toggleColorMode} variant="dark-mode" w={7} h={7}>
        <MoonIcon w={6} h={6} color="#080808" onClick={toggleColorMode} />
      </Button>
    )
  }

  if (colorMode === 'dark') {
    return (
      <Button onClick={toggleColorMode} variant="dark-mode" w={7} h={7}>
        <SunIcon w={6} h={6} color="#fff" onClick={toggleColorMode} />
      </Button>
    )
  }

  return (
    <Button onClick={toggleColorMode} variant="dark-mode" w={7} h={7}>
      <MoonIcon w={6} h={6} color="#080808" />
    </Button>
  )
  
}

const LoginIcon = () => {
  const { user } = useAuth();

  if (user) {
    return (
      <NextLink href="/account" passHref>
        <a className={styles.avatar} title="View Account">
          {<Image
            src={user?.photoUrl}
            width="36"
            height="36"
            alt="account avatar"
          /> || <Skeleton circle={true} height={36} width={36} />}
        </a>
      </NextLink>
    )
  }

  return (
    <NextLink href="/login" passHref>
      <Button href="/login" target="_self" title="Log in to Account" variant="menu-button">
        Log In
      </Button>
    </NextLink>
  )

}

const Navbar = () => {

  const router = useRouter();
  
  return (
    <>
      <header className={styles.head}>
        <nav className={styles.nav_bar}>

          <div className={styles.container}>
            <NextLink href="/" passHref>
              <a className={styles.nav_logo}>
                <Image
                  src={logoImg}
                  width="400"
                  height="67"
                  alt="A CSS Flex and Grid sandbox playgound"
                />
              </a>
            </NextLink>
            <Flex alignItems="center" gap="20px" pr="80px">
              <NextLink href="/flex-playground" passHref>
                <Link variant="menu-link" className={router.pathname == "/flex-playground" ? 'nav_link active' : 'nav_link'} target="_self">
                  Flex Playground
                </Link>
              </NextLink>
              <NextLink href="/grid-playground" passHref>
                <Link variant="menu-link" className={router.pathname == "/grid-playground" ? 'nav_link active' : 'nav_link'} target="_self" mr="2rem">
                  Grid Playground
                </Link>
              </NextLink>

              <LoginIcon />
              
              <DarkModeIcon />
            </Flex>
          </div>

        </nav>
      </header>
    </>
  )

}

export default Navbar