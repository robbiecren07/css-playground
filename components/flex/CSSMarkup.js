import { useState, useEffect, useContext } from 'react';
import FlexSidebarContext from "context/flexSidebarContext";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { Box, Code, Flex, Heading, Text } from '@chakra-ui/react';

const CSSMarkup = () => {
  const flexCtx = useContext(FlexSidebarContext)
  const flexDirection = flexCtx.FD_value
  const flexWrap = flexCtx.FW_value
  const justifyContent = flexCtx.JC_value
  const alignItems = flexCtx.AI_value
  const alignContent = flexCtx.AC_value

  const FD = () => {
    if (flexDirection !== 'row') {
      return (
        `flex-direction: ` + flexDirection + `;`
      )
    }
    if (flexDirection === 'row') {
      return '/* flex-direction: row; */'
    }
  }

  const codeString = `
  .container {
    display: flex;
    ` + FD() + `
    flex-wrap: ` + flexWrap + `;
    justify-content: ` + justifyContent + `;
    align-items: ` + alignItems + `;
    align-content: ` + alignContent + `;
  }
  `;

  return (
    <SyntaxHighlighter language='css' style={atomOneDark} className="markup_code">
      {codeString}
    </SyntaxHighlighter>
  )
}

export default CSSMarkup