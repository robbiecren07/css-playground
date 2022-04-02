import Head from "next/head"
import ErrorPage from "next/error"
import Layout from "@/components/Layout"
import { AuthProvider } from "@/lib/auth"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import '../styles/globals.scss'

// Code below is for joining 2 seperate styles like this: className={cx(styles.base, styles.btn)}
// const cx = (...classNames) => classNames.join(' ');

const App = ({ Component, pageProps }) => {
    
  // const { global } = pageProps
  // if (global == null) {
  //   return <ErrorPage statusCode={404} />
  // }

  return (
    <>
      <AuthProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>CSS Playground</title>
          <meta name="description" content="A learning playground for CSS and all things web!" />
        </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </>
  )
  
}

export default App