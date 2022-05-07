import { useState } from 'react'
import HextoRGB from '@/utils/HextoRGB'
import { CopyToClipboard } from "react-copy-to-clipboard"
import { useColorModeValue, Box, Heading, Input, Button, Flex, ButtonGroup } from '@chakra-ui/react'
import { CopyIcon, CheckIcon, RepeatIcon } from '@chakra-ui/icons'
import ColorBox from '../converter/ColorBox'

const DashboardMain = () => {
  const [hexValue, setHexVaue] = useState({ value: '' })
  const [rgbValue, setRgbValue] = useState('')
  const [isCopied, setIsCopied] = useState(false)
  const [colorBox, setColorBox] = useState({ hexValue: '', rgbValue: '', rgbaValue: '' })

  const bg = useColorModeValue('#fff', '#091227')
  const brColor = useColorModeValue('#e5e7eb', 'whiteAlpha.300')

  const convertHex = async (e) => {
    e.preventDefault()
    const value = hexValue.value
    const rgbcode = HextoRGB(value)
    setRgbValue(rgbcode.rgba)
    setColorBox({ hexValue: value, rgbValue: rgbcode.rgb, rgbaValue: rgbcode.rgba })
  }

  function handleChange(e) {
    setHexVaue({ value: e.target.value })
  }

  function resetInputField() {
    setHexVaue({ value: '' })
    setRgbValue('')
    setColorBox({ hexValue: '', rgbValue: '', rgbaValue: '' })
  }

  const onCopyRGB = () => {
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <>
      <Box w="100%">
        <Box maxW="1100px" margin="0 auto" mt="40px" mb="40px" p="40px" bg={bg} border="1px solid" borderColor={brColor} borderRadius="10px">
          <Heading as="h2" size="xl" textAlign="center">HEX to RGBA Converter</Heading>

          <Flex as="form" justifyContent="center" alignItems="center" gap="20px" mt="40px"
            onSubmit={convertHex}  
          >
            <Input size="lg" width="300px" type="text" name="hexcode" placeholder="HEX" maxLength="7"
              value={hexValue.value} onChange={handleChange}
            />
            <Button leftIcon={<RepeatIcon w={4} h={4} />} colorScheme='green' variant='solid' type="submit" size="lg">
              Convert
            </Button>

            <Input size="lg" width="300px" placeholder="RGBA"
              readOnly
              value={rgbValue}
            />
          </Flex>

          <Flex justifyContent="center" alignItems="center" mt="30px">
            <ButtonGroup colorScheme="blue" variant="outline" spacing="20px" size="md" justifyContent="center">
              <Button onClick={resetInputField}>
                Start Over
              </Button>
              <CopyToClipboard text={rgbValue} onCopy={onCopyRGB}>
                {isCopied ?
                  <Button leftIcon={<CheckIcon w={4} h={4} />}>
                    Copied!
                  </Button>
                  :
                  <Button leftIcon={<CopyIcon w={4} h={4} />}>
                    Copy RGBA Value
                  </Button>
                }
              </CopyToClipboard>
            </ButtonGroup>
          </Flex>

          <ColorBox hexValue={colorBox.hexValue} rgbValue={colorBox.rgbValue} rgbaValue={colorBox.rgbaValue} />

        </Box>
      </Box>
    </>
  )

}

export default DashboardMain