import useSWR from 'swr'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { useAuth } from '@/lib/auth'
import { NextSeo } from 'next-seo'
import fetcher from '@/utils/fetcher'
import DashboardShell from '@/components/dashboard/DashboardShell'
import { Box, Button, ButtonGroup, useColorModeValue } from '@chakra-ui/react'

import styles from '../../styles/Dashboard.module.scss'

async function gitFetcher(...arg) {
  const res = await fetch(...arg)

  return res.json()
}

const Dashboard = () => {
  const { user } = useAuth()
  //const { data } = useSWR(user ? ['/api/sites', user.token] : null, fetcher)
  const { data } = useSWR('../api/github', gitFetcher)
  const isPaidAccount = user?.stripeRole !== 'free'

  // (user?.email === 'robbiecfreelance@gmail.com')
  if (user) {  
    return (
      <>
        <DashboardShell />
        {/* { data ? data.starred : 'loading' } */}
      </>
    )
  }

  if (!user) {
    return (
      <h1>No Data</h1>
    )
  }

  return (
    <h1>Please Login</h1>
  )
  
}

const DashboardPage = () => {
  const { user, loading } = useAuth()
  const router = useRouter()

  const bg = useColorModeValue('#f8fafc', '#080F21')
  const brColor = useColorModeValue('#e5e7eb', 'whiteAlpha.300')

  useEffect(() => {
    if (!loading && !user) {
        router.push('/');
    }
  }, [user, loading]);

  return (
    <>
      <NextSeo noindex={true} nofollow={true} />
      <main className={styles.container}>
        <h1 className="screen-reader-text">CSS Flex Playground - Learn how to build Flexbox layouts.</h1>
        
        <Box as="aside" className={styles.left_sidebar} borderColor={brColor}>

        </Box>

        <Box as="section" className={styles.right_content} bg={bg}>
          <Dashboard />
        </Box>

      </main>
    </>
  )

}

export default DashboardPage