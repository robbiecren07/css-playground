import Link from 'next/link'
import OpenGraph from '@/components/OpenGraph'
import { Heading, Button, Container, Box } from '@chakra-ui/react'

import styles from '../styles/Home.module.scss'

export default function Home() {

  const title = 'CSS Playground | A web app for learning CSS'
  const description = 'Learn CSS Flexbox & Grid, with an interactive layout building tool, which will output your HTML & CSS.'
  const url = 'https://www.cssplayground.dev/'

  return (
    <>
      <OpenGraph
        title={title}
        description={description}
        url={url}
      />
      <main className="main">
        
        <Box w="100%" h="100%" display="flex" flexDirection="column" justifyContent="center">
          <Container w="100%" h="100%" maxW="1100px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">

            <h1 className="screen-reader-text">The ultimate CSS Playground for learning and building in CSS</h1>
            <Heading as="h2" size="2xl" mb="30px">
              Enter the Realm of CSS
            </Heading>
            <Heading as="h3" size="xl" mb="30px">
              Pick your playground
            </Heading>

            <Box w="100%" maxW="400px" mb="20px">
              <Link href="/flex-playground" passHref>
                <Button size="xl" variant="solid-blue" target="_self" title="Flex Playground">
                  Flex Playground
                </Button>
              </Link>
            </Box>

            <Box w="100%" maxW="400px">
              <Link href="/grid-playground" passHref>
                <Button size="xl" variant="solid-blue" target="_self" title="Grid Playground">
                  Grid Playground
                </Button>
              </Link>
            </Box>

          </Container>
        </Box>
        
      </main>
    </>
  )
  
}