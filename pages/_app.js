import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/provider'
import theme from '@/styles/theme'
import Layout from '@/components/Layout'
import { Progress } from '@/components/progress';

import '../styles/globals.scss'

// Code below is for joining 2 seperate styles like this: className={cx(styles.base, styles.btn)}
// const cx = (...classNames) => classNames.join(' ');

const App = ({ Component, pageProps }) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // progress bar
    const handleStart = () => {
      setIsAnimating(true)
    }
    const handleStop = () => {
      setIsAnimating(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  useEffect(() => {
    // handle Google Analytics tracking
    const handleRouteChange = (url) => {
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      })
    }
    //When the component is mounted, subscribe to router changes and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <title>CSS Playground</title>
        <meta name="description" content="A learning playground for CSS and all things web!" />
      </Head>

      <ChakraProvider resetCSS theme={theme}>
        <Progress isAnimating={isAnimating} />
        <Layout>
          {/* <DefaultSeo {...SEO} /> */}
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
  
}

export default App