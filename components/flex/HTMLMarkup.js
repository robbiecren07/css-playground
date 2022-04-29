import { useContext, useState } from 'react'
import FlexSidebarContext from "context/flexSidebarContext"
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { CopyToClipboard } from "react-copy-to-clipboard"
import { useColorModeValue, Box } from '@chakra-ui/react'
import { CopyIcon, CheckIcon } from '@chakra-ui/icons'

const HTMLMarkup = () => {

  const [isCopied, setIsCopied] = useState(false)
  const codeBG = useColorModeValue(atomOneLight, atomOneDark)
  const flexCtx = useContext(FlexSidebarContext)

  const addFlexItems =
    flexCtx.Flex_items.length === 0
      ? ''
      : flexCtx.Flex_items.map((item, index) => {
        return `  <div class="item_${index}"></div>`
      }).join('\n')

  const htmlString = `<div class="container">${'\n'}${addFlexItems}${'\n'}</div>`

  const onCopyText = () => {
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <>
      <Box>
        <SyntaxHighlighter language='html' style={codeBG} className="markup_code">
          {htmlString}
        </SyntaxHighlighter>
        <Box position="absolute" bottom="10px" right="15px" cursor="pointer">
          <CopyToClipboard text={htmlString} onCopy={onCopyText}>
            {isCopied ? <CheckIcon w={4} h={4} /> : <CopyIcon w={4} h={4} />}
          </CopyToClipboard>
        </Box>
      </Box>
    </>
  )
}

export default HTMLMarkup