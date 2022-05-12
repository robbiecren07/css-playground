import { useState, useContext, useEffect } from 'react'
import { Box, Button, ButtonGroup, useColorModeValue } from '@chakra-ui/react'

import styles from '@/styles/Tools.module.scss'

const ToolsSidebar = () => {
  const bg = useColorModeValue('blackAlpha.200', 'white')
  const brColor = useColorModeValue('#e5e7eb', 'whiteAlpha.300')

  return (
    <Box as="aside" className={styles.left_sidebar} borderColor={brColor}>

      <h2>Tools</h2>
    </Box>
  )

}

export default ToolsSidebar