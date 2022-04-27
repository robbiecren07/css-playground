import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { AuthProvider } from '@/lib/auth'
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import ErrorPage from 'next/error'
import { ChakraProvider } from '@chakra-ui/provider'
import theme from '@/styles/theme'
import Layout from '@/components/Layout'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import '../styles/globals.scss'

// Code below is for joining 2 seperate styles like this: className={cx(styles.base, styles.btn)}
// const cx = (...classNames) => classNames.join(' ');

const App = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      })
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

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
            {/* <DefaultSeo {...SEO} /> */}
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>

      </AuthProvider>
    </>
  )
  
}

export default App