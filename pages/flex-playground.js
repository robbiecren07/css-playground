//import { useState } from 'react';
import { NextSeo } from 'next-seo';
import OpenGraph from '@/components/OpenGraph';
import { FlexSidebarContextProvider } from 'context/flexSidebarContext';
import FlexSidebar from '@/components/flex/FlexSidebar';
import FlexContainer from '@/components/flex/FlexContainer';

import styles from '../styles/Flex.module.scss'

export default function FlexPlayground() {

  const title = 'CSS Flexbox Playground | CSS Playground'
  const description = 'Learn and build your own CSS Flexbox layouts with an interative building tool, which will output your HTML & CSS.'
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
          <h1 className="screen-reader-text">CSS Flex Playground - Learn how to build Flexbox layouts.</h1>
          
          <FlexSidebar />
          <FlexContainer />

        </main>
      </FlexSidebarContextProvider>
    </>
  )

}