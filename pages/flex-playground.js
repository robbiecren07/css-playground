import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import FlexSidebar from '@/components/flex/flex-sidebar';
import FlexContainer from '@/components/flex/flex-container';

import styles from '../styles/Flex.module.scss'

let currentIndex = 0 

export default function FlexPlayground({ sidebarProps }) {
  // Parent container for the onCick event which starts at flex-sidebarcontainer
  // add gets padded to the FlexContainer with addFlexItem using the usaState
  const [addFlexItem, setAddFlexItem] = useState([])
  const [addFlexItemStyles, setFlexItemStyles] = useState('')

  //console.log(addFlexItem)
  
  return (
    <main className={styles.container}>

      {/* <FlexSidebar sidebarProps={sidebarProps} onClick={() => setAddFlexItem([...addFlexItem, currentIndex++])} handleOnChange={(value) => setFlexItemStyles(value)} />
      <FlexContainer addFlexItem={addFlexItem} setAddFlexItem={setAddFlexItem} addFlexItemStyles={addFlexItemStyles} /> */}

    </main>
  )

}