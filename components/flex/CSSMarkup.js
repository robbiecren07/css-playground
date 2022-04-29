import { useContext, useState } from 'react'
import FlexSidebarContext from "context/flexSidebarContext"
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { CopyToClipboard } from "react-copy-to-clipboard"
import { useColorModeValue, Box } from '@chakra-ui/react'
import { CopyIcon, CheckIcon } from '@chakra-ui/icons'

const CSSMarkup = () => {

  const [isCopied, setIsCopied] = useState(false);
  const codeBG = useColorModeValue(atomOneLight, atomOneDark)
  
  const flexCtx = useContext(FlexSidebarContext)
  const flexDirection = flexCtx.FD_value
  const flexWrap = flexCtx.FW_value
  const justifyContent = flexCtx.JC_value
  const alignItems = flexCtx.AI_value
  const alignContent = flexCtx.AC_value

  let fd = ''
  let fw = ''
  let jc = ''
  let ai = ''
  let ac = ''

  if (flexDirection !== 'row') {
    fd = `${'\n'}  flex-direction: ${flexDirection};` 
  }
  if (flexWrap !== 'nowrap') {
    fw = `${'\n'}  flex-wrap: ${flexWrap};` 
  }
  if (justifyContent !== 'flex-start') {
    jc = `${'\n'}  justify-content: ${justifyContent};` 
  }
  if (alignItems !== 'flex-start') {
    ai = `${'\n'}  align-items: ${alignItems};` 
  }
  if (alignContent !== 'flex-start') {
    ac = `${'\n'}  align-content: ${alignContent};` 
  }

  const containerCSS = `.container {${'\n'}  display: flex;${fd}${fw}${jc}${ai}${ac}${'\n'}}`

  const itemsCSS = flexCtx.Flex_items.map((item, index) => {
    let noCount = 0
    let fg = ''
    let fs = ''
    let fb = ''
    let as = ''
    let or = ''
  
    if (item.FG_value !== 0) {
      noCount++
      fg = `${'\n'}  flex-grow: ${item.FG_value};` 
    }
    if (item.FS_value !== 0) {
      noCount++
      fs = `${'\n'}  flex-shrink: ${item.FS_value};` 
    }
    if (item.FB_value !== 'auto') {
      noCount++
      fb = `${'\n'}  flex-basis: ${item.FB_value};` 
    }
    if (item.AS_value !== 'auto') {
      noCount++
      as = `${'\n'}  align-self: ${item.AS_value};` 
    }
    if (item.OR_value !== 0) {
      noCount++
      or = `${'\n'}  order: ${item.OR_value};` 
    }

    if (noCount > 0) {
      return `.item_${index} {${fg}${fs}${fb}${as}${or}${'\n'}}`
    } else {
      return null
    }
      
  }).filter((item) => item !== null)
    
  if (itemsCSS.length > 0) {
    itemsCSS = `${'\n\n'}${itemsCSS.join('\n\n')}`
  } else {
    itemsCSS = ''
  }

  const cssString = `${containerCSS}${itemsCSS}`

  const onCopyText = () => {
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <>
      <Box>
        <SyntaxHighlighter language='css' style={codeBG} className="markup_code">
          {cssString}
        </SyntaxHighlighter>
        <Box position="absolute" bottom="10px" right="15px" cursor="pointer">
          <CopyToClipboard text={cssString} onCopy={onCopyText}>
            {isCopied ? <CheckIcon w={4} h={4} /> : <CopyIcon w={4} h={4} />}
          </CopyToClipboard>
        </Box>
      </Box>
    </>
  )
}

export default CSSMarkup