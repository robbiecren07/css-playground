import { useState, useContext, useEffect } from 'react'
import NextLink from "next/link"
import { Box, Button, ButtonGroup, Heading, List, ListIcon, ListItem, useColorModeValue } from '@chakra-ui/react'
import { MdInvertColors } from 'react-icons/md'
import { IoColorFilterOutline } from "react-icons/io5";
import styles from '@/styles/Tools.module.scss'
import { MoonIcon } from '@chakra-ui/icons'

const ToolsSidebar = () => {
  const bg = useColorModeValue('blackAlpha.200', 'white')
  const brColor = useColorModeValue('#e5e7eb', 'whiteAlpha.300')

  return (
    <Box as="aside" className={styles.left_sidebar} borderColor={brColor}>
      <Heading as="h3" size="md" p="20px 0" textAlign="center">Tools</Heading>
      <Box p="0 1rem">
        <List spacing={3}>
          <ListItem>
            <NextLink href="/tools/color-converter/" passHref>
              <a>
                <ListIcon as={MdInvertColors} w={6} h={6} color='purple.500' />
                HEX to RGBA Converter
              </a>
            </NextLink>
          </ListItem>
          <ListItem>
            <ListIcon as={IoColorFilterOutline} w={6} h={6} color='purple.500' />
            RGBA to HEX Converter
          </ListItem>
        </List>
      </Box>
    </Box>
  )

}

export default ToolsSidebar