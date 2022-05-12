import { NextSeo } from 'next-seo'
import OpenGraph from '@/components/OpenGraph'

import styles from '@/styles/Tools.module.scss'

export default function ToolsPage() {

  const title = 'Tools | CSS Playground'
  const description = 'Learn and build your own CSS Flexbox layouts with an interative building tool, which will output your HTML & CSS.'
  const url = 'https://www.cssplayground.dev/tools/'

  return (
    <>
      <OpenGraph
        title={title}
        description={description}
        url={url}
      />
        <main className={styles.container}>
          <h1 className="screen-reader-text">Web Developer Tools</h1>

          {/* <FlexSidebar />
          <FlexContainer /> */}
          <h2>Tools</h2>

        </main>
    </>
  )

}