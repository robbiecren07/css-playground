//import { useState } from 'react';
import { NextSeo } from 'next-seo';
import OpenGraph from '@/components/OpenGraph';
import { FlexSidebarContextProvider } from 'context/flexSidebarContext';
import FlexSidebar from '@/components/flex/FlexSidebar';
import FlexContainer from '@/components/flex/FlexContainer';

import styles from '../styles/Flex.module.scss'

export default function FlexPlayground() {

  const title = 'Flex Playground | CSS Playground - TEST'
  const description = 'This example uses more of the available config options.'
  const url = 'https://www.cssplayground.dev/flex-playground/'

  return (
    <>
      <OpenGraph
        title={title}
        description={description}
        url={url}
      />
      <FlexSidebarContextProvider>
        <main className={styles.container}>

        <FlexSidebar />
        <FlexContainer />

        </main>
      </FlexSidebarContextProvider>
    </>
  )

}