import { useState, useEffect, useContext } from 'react'
import FlexSidebarContext from 'context/flexSidebarContext'
import DisplayFlexItem from './DisplayFlexItem'
import FlexMarkup from './FlexMarkup'
import { Box, useColorModeValue } from '@chakra-ui/react'

import styles from '../../styles/Flex.module.scss'

const FlexContainer = () => {

  const flexCtx = useContext(FlexSidebarContext)
  const showMarkUp = flexCtx.markUpValue
  const bg = useColorModeValue('#f8fafc', '#080F21')

  return (
    <>
      {showMarkUp === false && 
        <Box as="section" className={styles.right_content} bg={bg}
          style={{ flexDirection: flexCtx.FD_value, flexWrap: flexCtx.FW_value, justifyContent: flexCtx.JC_value, alignItems: flexCtx.AI_value, alignContent: flexCtx.AC_value }}>
          <DisplayFlexItem />
        </Box>
      }
      
      {showMarkUp === true &&
        <Box as="section" className={styles.right_content} bg={bg}>
          <FlexMarkup />
        </Box>
      }
    </>
  )

}

export default FlexContainer