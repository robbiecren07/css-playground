import { useState, useEffect, useContext } from 'react';
import FlexSidebarContext from "context/flexSidebarContext";
import { Box, Code, Flex, Heading, Text } from '@chakra-ui/react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const HTMLMarkup = () => {
  const codeString =`
  <div class="container">
    <div class="item-0"></div>
    <div class="item-0"></div>
    <div class="item-0"></div>
  </div>
  `;

  return (
    <SyntaxHighlighter language='html' style={atomOneDark} className="markup_code">
      {codeString}
    </SyntaxHighlighter>
  )
}

export default HTMLMarkup