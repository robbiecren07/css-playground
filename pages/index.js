import Link from 'next/link'

import styles from '../styles/Home.module.scss'

export default function Home() {
  
  return (
    <main className="main">

      <div className="container">
        <h1 className="screen-reader-text">The CSS Playground</h1>

        <div className={styles.content}>
          <h2>Enter the Realm of CSS</h2>
          <h3 className="h4">Pick your playground</h3>
        </div>
        
        <div className="btn_wrap">
          <Link href="/flex-playground" passHref>
            <a className="btn" target="_self" title="Flex Playground">
              Flex Playground
            </a>
          </Link>
        </div>

        <div className="btn_wrap">
          <Link href="/grid-playground" passHref>
            <a className="btn" target="_self" title="Grid Playground">
              Grid Playground
            </a>
          </Link>
        </div>
      </div>
      
    </main>
  )
  
}