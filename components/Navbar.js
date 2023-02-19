import NextLink from "next/link"
import Image from "./Image"
import { useRouter } from "next/router"
import { useAuth } from "@/lib/auth"
import { useColorMode, useColorModeValue, Button, Flex, Text, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { SunIcon, MoonIcon, ChevronDownIcon } from '@chakra-ui/icons'
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

const Navbar = () => {

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
              
              <DarkModeIcon />
            </Flex>
          </div>

        </nav>
      </header>
    </>
  )

}

export default Navbar