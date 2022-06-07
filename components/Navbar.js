import React, { useRef } from 'react'
import NextLink from "next/link"
import Image from "./Image"
import { useRouter } from "next/router"
import { useAuth } from "@/lib/auth"
import {
  useColorMode, useColorModeValue, Button, Link, Flex, Text, Popover, VStack, StackDivider, Portal, Menu, MenuButton, MenuItem, MenuList,
  PopoverTrigger, PopoverContent, PopoverHeader, PopoverCloseButton, PopoverBody, PopoverArrow, Progress, Box
} from "@chakra-ui/react"
import { SunIcon, MoonIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { GitHubIcon, GoogleIcon } from '@/styles/theme';
import Skeleton from 'react-loading-skeleton'
import logoImg from '../public/css-playground-logo-100x50.png'

import 'react-loading-skeleton/dist/skeleton.css'
import styles from '../styles/Header.module.scss'

const DarkModeIcon = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  
  if (colorMode === 'light') {
    console.log('light')
    return (
      <Button onClick={toggleColorMode} variant="dark-mode" w={7} h={7}>
        <MoonIcon w={6} h={6} color="#080808" onClick={toggleColorMode} />
      </Button>
    )
  }

  if (colorMode === 'dark') {
    console.log('dark')
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

const UserIcon = ({ user }) => {

  const { signout } = useAuth()
  const initialFocusRef = React.useRef()
  const color = useColorModeValue('#080808', '#fff')
  const boxColor = useColorModeValue('rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;', 'unset')
  
  return (
    <Menu>
      <MenuButton as="button" className={styles.avatar}>
        {<Image
          src={user?.photoUrl}
          width="36"
          height="36"
          alt="account avatar"
        /> || <Skeleton circle={true} height={36} width={36} />}
      </MenuButton>
      <MenuList minW="160px" w="160px">
        <MenuItem>
          <NextLink href="/dashboard" passHref>
            <a className={styles.menu_link}>Dashboard</a>
          </NextLink>
        </MenuItem>
        <MenuItem>
          <NextLink href="/account" passHref>
            <a className={styles.menu_link}>Account</a>
          </NextLink>
        </MenuItem>
        <MenuItem>
          <a className={styles.menu_link} onClick={signout}>
            Sign Out
          </a>
        </MenuItem>
      </MenuList>
    </Menu>
    // <Popover placement="bottom" closeOnBlur={true}>
    //   <PopoverTrigger>
    //     <button className={styles.avatar}>
    //       {<Image
    //         src={user?.photoUrl}
    //         width="36"
    //         height="36"
    //         alt="account avatar"
    //       /> || <Skeleton circle={true} height={36} width={36} />}
    //     </button>
    //   </PopoverTrigger>
    //   <PopoverContent boxShadow={boxColor} w="160px">
    //     <PopoverArrow />
    //     <PopoverBody p="20px 0">
    //       <VStack
    //         spacing={0}
    //         align='stretch'
    //       >
    //         <NextLink href="/dashboard" passHref>
    //           <Link className={styles.menu_link}>Dashboard</Link>
    //         </NextLink>
    //         <NextLink href="/account" passHref>
    //           <Link className={styles.menu_link}>Account</Link>
    //         </NextLink>
    //         <Link className={styles.menu_link} onClick={signout}>
    //           Sign Out
    //         </Link>
    //       </VStack>
    //     </PopoverBody>
    //   </PopoverContent>
    // </Popover>
  )

}

const LoginIcon = () => {

  const auth = useAuth()
  const initialFocusRef = React.useRef()
  const color = useColorModeValue('#080808', '#fff')
  const boxColor = useColorModeValue('rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;', 'var(--chakra-shadows-dark-lg)')
  
  return (
    <Popover initialFocusRef={initialFocusRef} placement="bottom-start" closeOnBlur={true}>
      <PopoverTrigger>
        <Button title="Log in to Account" variant="menu-button" ml="20px" mr="20px">
          Log In
        </Button>
      </PopoverTrigger>
      <PopoverContent boxShadow={boxColor}>
        <PopoverArrow />
        <PopoverHeader pt="20px" pb="0" fontSize="3xl" fontWeight="bold" border="0" textAlign="center">
          Hey!
        </PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody>
          <Text as="p" mb="26px" textAlign="center">Use your email or another service to continue with CSS Playground.</Text>
          <div className={styles.auth_btn}>
            <Button onClick={(e) => auth.signinWithGitHub('/dashboard')} variant="outline-blue">
              <GitHubIcon w="30px" h="30px" mr="16px" fill={color} />
              Continue with GitHub
            </Button>
          </div>

          <div className={styles.auth_btn}>
            <Button ref={initialFocusRef} onClick={(e) => auth.signinWithGoogle('/dashboard')} variant="outline-blue">
              <GoogleIcon w="28px" h="28px" mr="16px" color={color} />
              Continue with Google
            </Button>
          </div>

          <Text mt="26px" mb="10px" fontSize="12px" textAlign="center">
            By continuing, you agree to our Terms of Service. Read our Privacy Policy.
          </Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )

}

const Navbar = () => {

  const { user } = useAuth()
  const router = useRouter()
  const color = useColorModeValue('#080808', '#fff')
  const fontWeight = useColorModeValue('500', '400')
  const boxColor = useColorModeValue('rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;', 'var(--chakra-shadows-dark-lg)')
  
  return (
    <>
      <header className={styles.head}>
        <nav className={styles.nav_bar}>

          <div className={styles.container}>
            <NextLink href="/" passHref>
              <a className={styles.nav_logo}>
                <Image
                  src={logoImg}
                  width="70"
                  height="36"
                  alt="A CSS Flexbox and Grid sandbox for learning and building in CSS."
                />
                <Text as="span" color={color}>Playground</Text>
              </a>
            </NextLink>
            <Flex h="40px" alignItems="center" gap="20px" pr="80px">
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} p="0"
                  bg="none" fontWeight={fontWeight} _hover={{ bg: "none", color: "blue.500" }} _focus={{ bg: "none", }} _active={{ bg: "none", color: "blue.500" }}
                >
                  Playgounds
                </MenuButton>
                <MenuList boxShadow={boxColor}>
                  <NextLink href="/flex-playground" passHref>
                    <MenuItem as="a" fontSize="14px">
                      CSS Flexbox
                    </MenuItem>
                  </NextLink>
                  <NextLink href="/grid-playground" passHref>
                    <MenuItem as="a" fontSize="14px">
                      CSS Grid Layout
                    </MenuItem>
                  </NextLink>
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} p="0"
                  bg="none" fontWeight={fontWeight} _hover={{ bg: "none", color: "blue.500" }} _focus={{ bg: "none", }} _active={{ bg: "none", color: "blue.500" }}
                >
                  Tools
                </MenuButton>
                <MenuList boxShadow={boxColor}>
                  <NextLink href="/tools/color-converter" passHref>
                    <MenuItem as="a" fontSize="14px">
                      Color Converter
                    </MenuItem>
                  </NextLink>
                </MenuList>
              </Menu>
              {/* <NextLink href="/flex-playground" passHref>
                <Link variant="menu-link" className={router.pathname == "/flex-playground" ? 'nav_link active' : 'nav_link'} target="_self">
                  Flex Playground
                </Link>
              </NextLink>
              <NextLink href="/grid-playground" passHref>
                <Link variant="menu-link" className={router.pathname == "/grid-playground" ? 'nav_link active' : 'nav_link'} target="_self" mr="30px">
                  Grid Playground
                </Link>
              </NextLink> */}

              {!user ? <LoginIcon /> : <UserIcon user={user} />}
              
              <DarkModeIcon />
            </Flex>
          </div>

        </nav>
        {/* <Progress size="xs" bg="linear-gradient(to right, #9061f9, #e74694);" /> */}
      </header>
    </>
  )

}

export default Navbar