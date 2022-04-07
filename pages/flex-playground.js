//import React from 'react';
import { useState } from 'react';
import { FlexSidebarContextProvider } from 'context/flexSidebar';
import FlexSidebar from '@/components/flex/flex-sidebar';
import FlexContainer from '@/components/flex/flex-container';

import styles from '../styles/Flex.module.scss'

let currentIndex = 0 

export default function FlexPlayground() {

  // useState for adding flex item
  const [addFlexItem, setAddFlexItem] = useState([])

  // useState for selected flex item
  const [isSelectedItem, setSelectedItem] = useState(null)

  // useState for getting select field's onChange
  const [addFDStyle, setFDStyle] = useState('')
  const [addFWStyle, setFWStyle] = useState('')
  const [addJCStyle, setJCStyle] = useState('')
  const [addAIStyle, setAIStyle] = useState('')
  const [addACStyle, setACStyle] = useState('')

  const [addFGStyle, setFGStyle] = useState(0)

  //console.log(addFGStyle)

  return (
    <FlexSidebarContextProvider>
      <main className={styles.container}>

      <FlexSidebar
        onClick={() => setAddFlexItem([...addFlexItem, currentIndex++])}
        handleFD={(value) => setFDStyle(value)}
        handleFW={(value) => setFWStyle(value)}
        handleJC={(value) => setJCStyle(value)}
        handleAI={(value) => setAIStyle(value)}
        handleAC={(value) => setACStyle(value)}
        handleFG={(value) => setFGStyle(value)}
        addFlexItem={addFlexItem}
        selectedItem={isSelectedItem}
      />

      <FlexContainer
        addFlexItem={addFlexItem}
        setAddFlexItem={setAddFlexItem}
        selectedItem={() => setSelectedItem()}
        addFDStyle={addFDStyle}
        addFWStyle={addFWStyle}
        addJCStyle={addJCStyle}
        addAIStyle={addAIStyle}
        addACStyle={addACStyle}
        addFGStyle={addFGStyle}
      />

      </main>
    </FlexSidebarContextProvider>
  )

}