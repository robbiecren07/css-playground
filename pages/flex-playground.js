//import React from 'react';
import { useState } from 'react';
import { FlexSidebarContextProvider } from 'context/flexSidebar';
import FlexSidebar from '@/components/flex/flex-sidebar';
import FlexContainer from '@/components/flex/flex-container';

import styles from '../styles/Flex.module.scss'

let currentIndex = 0 

export default function FlexPlayground() {

  // useState for adding & selecting a flex item
  //const [addFlexItem, setAddFlexItem] = useState([])
  const [isSelectedItem, setSelectedItem] = useState(null)

  return (
    <FlexSidebarContextProvider>
      <main className={styles.container}>

      <FlexSidebar
        // onClick={() => setAddFlexItem([...addFlexItem, currentIndex++])}
        // addFlexItem={addFlexItem}
        selectedItem={isSelectedItem}
      />

      <FlexContainer
        // addFlexItem={addFlexItem}
        // setAddFlexItem={setAddFlexItem}
        selectedItem={() => setSelectedItem()}
      />

      </main>
    </FlexSidebarContextProvider>
  )

}