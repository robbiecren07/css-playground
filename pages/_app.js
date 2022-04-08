import Head from "next/head"
import { AuthProvider } from "@/lib/auth"
import ErrorPage from "next/error"
import { ChakraProvider } from "@chakra-ui/provider"
import theme from "@/styles/theme"
import Layout from "@/components/Layout"

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import '../styles/globals.scss'

// Code below is for joining 2 seperate styles like this: className={cx(styles.base, styles.btn)}
// const cx = (...classNames) => classNames.join(' ');

const App = ({ Component, pageProps }) => {
    
  return (
    <>
      <AuthProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>CSS Playground</title>
          <meta name="description" content="A learning playground for CSS and all things web!" />
        </Head>

        <ChakraProvider resetCSS theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>

      </AuthProvider>
    </>
  )
  
}

export default App