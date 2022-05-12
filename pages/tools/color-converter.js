import { useState } from 'react'
import OpenGraph from '@/components/OpenGraph'
import HextoRGB from '@/utils/HextoRGB'
import { CopyToClipboard } from "react-copy-to-clipboard"
import { useColorModeValue, Box, Heading, Input, Button, Flex, ButtonGroup } from '@chakra-ui/react'
import { CopyIcon, CheckIcon, RepeatIcon } from '@chakra-ui/icons'
import ColorBox from '@/components/converter/ColorBox'

import styles from '@/styles/Tools.module.scss'
import ToolsSidebar from '@/components/tools/ToolsSidebar'

const title = 'Color Converter - HEX to RGBA | CSS Playground'
const description = 'Learn and build your own CSS Flexbox layouts with an interative building tool, which will output your HTML & CSS.'
const url = 'https://www.cssplayground.dev/tools/color-converter'

const ColorConverter = () => {
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

    let newHexValue

    if (!value.includes('#')) {
      newHexValue = '#' + value
    } else {
      newHexValue = value
    }

    setRgbValue(rgbcode.rgba)
    setColorBox({ hexValue: newHexValue, rgbValue: rgbcode.rgb, rgbaValue: rgbcode.rgba })
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

const ColorConverterPage = () => {
  const bg = useColorModeValue('#f8fafc', '#080F21')

  return (
    <>
      <OpenGraph
        title={title}
        description={description}
        url={url}
      />
      <main className={styles.container}>
        <h1 className="screen-reader-text">CSS Flex Playground - Learn how to build Flexbox layouts.</h1>

        <ToolsSidebar />
        
        <Box as="section" className={styles.right_content} bg={bg}>
          <ColorConverter />
        </Box>

      </main>
    </>
  )
}

export default ColorConverterPage