import { useState, useEffect, useContext } from 'react'
import FlexSidebarContext from "context/flexSidebarContext"
import HTMLMarkup from './HTMLMarkup'
import CSSMarkup from './CSSMarkup'
import { Box, Code, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'

const FlexMarkup = () => {

  const bg = useColorModeValue('#fff', '#091227')
  const brColor = useColorModeValue('#e5e7eb', 'whiteAlpha.300')

  return (
    <Box w="100%" h="100%" p="20px">
      <Box mb="40px">
        <Heading as="h2" size="2xl" fontWeight="bold" mb="10px">Markup</Heading>
        <Text as="p">Below you will find the CSS and HTML required to generate the current layout you built.<br />
          The CSS has been optimized to omit any properties which have the default values.<br />
          For example, <Code colorScheme='blue' children="flex-direction: row;" /> would not be included since that is the default value for <Code colorScheme='blue' children="flex-direction" />.
        </Text>
      </Box>

      <Flex flexWrap="wrap" gap="20px" w="100%" p="20px" bg={bg} borderRadius="10px" border="1px solid" borderColor={brColor}>
        <Box flexBasis={{ base: '100%', lg: 'calc(50% - 10px)' }}>
          <Heading as="h3" size="md" mb="6px">HTML</Heading>
          <HTMLMarkup />
        </Box>
        
        <Box flexBasis={{ base: '100%', lg: 'calc(50% - 10px)' }}>
          <Heading as="h3" size="md" mb="6px">CSS</Heading>
          <CSSMarkup />
        </Box>
      </Flex>
      <Box pb="80px"></Box>
    </Box>
  )

}

export default FlexMarkup