import { Box, Flex, useColorModeValue, Text, Heading, Grid } from "@chakra-ui/react"

const ColorBox = ({ hexValue, rgbValue, rgbaValue }) => {

  const bg = useColorModeValue('#f8fafc', '#fff')
  const brColor = useColorModeValue('#e5e7eb', 'whiteAlpha.300')

  return (
    <Flex w="100%" justifyContent="center" mt="60px" mb="10px">
      <Flex w="500px" bg={bg} border="1px solid" borderColor={brColor} borderRadius="10px">

        <Box w="180px" h="180px" borderLeftRadius="10px"
          bg={hexValue ? hexValue : '#fff'}>
        </Box>

        <Box flex="1" borderLeft="1px solid" borderLeftColor={brColor} p="20px">
          <Heading as="h4" size="sm" mb="12px" color="#080808">Color Codes</Heading>
          <Grid templateColumns="60px 1fr" mb="6px" gap={1}>
            <Text color="purple.500" fontWeight="500">HEX</Text>
            <Text color="#080808">{ hexValue }</Text>
            <Text color="purple.500" fontWeight="500">RGB</Text>
            <Text color="#080808">{ rgbValue }</Text>
            <Text color="purple.500" fontWeight="500">RGBA</Text>
            <Text color="#080808">{ rgbaValue }</Text>
          </Grid>
        </Box>

      </Flex>
    </Flex>
  )

}

export default ColorBox