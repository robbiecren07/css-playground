//import { useState } from 'react';
import { FlexSidebarContextProvider } from 'context/flexSidebarContext';
import FlexSidebar from '@/components/flex/FlexSidebar';
import FlexContainer from '@/components/flex/FlexContainer';

import styles from '../styles/Flex.module.scss'

export default function FlexPlayground() {

  return (
    <FlexSidebarContextProvider>
      <main className={styles.container}>

      <FlexSidebar />
      <FlexContainer />

      </main>
    </FlexSidebarContextProvider>
  )

}