import { useContext } from 'react';
import FlexSidebarContext from "context/flexSidebarContext";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useColorModeValue } from '@chakra-ui/react';

const HTMLMarkup = () => {

  const codeBG = useColorModeValue(atomOneLight, atomOneDark)

  const flexCtx = useContext(FlexSidebarContext)
  const addFlexItems =
    flexCtx.Flex_items.length === 0
      ? ''
      : flexCtx.Flex_items.map((item, index) => {
        return `  <div class="item_${index}"></div>`
      }).join('\n')

  const htmlString = `<div class="container">${'\n'}${addFlexItems}${'\n'}</div>`

  return (
    <SyntaxHighlighter language='html' style={codeBG} className="markup_code">
      {htmlString}
    </SyntaxHighlighter>
  )
}

export default HTMLMarkup