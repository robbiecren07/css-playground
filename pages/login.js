import Layout from '@/components/Layout';
import { useAuth } from '@/lib/auth';
import OpenGraph from '@/components/OpenGraph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'

import styles from '../styles/Dashboard.module.scss'
import { GitHubIcon, GoogleIcon } from '@/styles/theme';
import { Button, useColorModeValue } from '@chakra-ui/react';

export default function Login() {

  const auth = useAuth()
  const color = useColorModeValue('#080808', '#fff')

  const title = 'Log Into My Account | CSS Playground'
  const description = 'Log in or sign up for an account with CSS Playground. Get notified when new features are released.'
  const url = 'https://www.cssplayground.dev/login'

  return (
    <>
      <OpenGraph
        title={title}
        description={description}
        url={url}
      />
      <main className={styles.main}>
        <div className={styles.auth_wrap}>

          <div className={styles.auth_form}>
            <h1>Hey!</h1>
            <p>Use your email or another service to continue with CSS Playground.</p>

            <div className={styles.btn}>
              <Button onClick={(e) => auth.signinWithGitHub('/dashboard')} variant="outline-blue">
                {/* <FontAwesomeIcon icon={faGithub} size="2x" /> */}
                <GitHubIcon w="30px" h="30px" mr="16px" fill={color} />
                Continue with GitHub
              </Button>
            </div>

            <div className={styles.btn}>
              <Button onClick={(e) => auth.signinWithGoogle('/dashboard')} variant="outline-blue">
                <GoogleIcon w="28px" h="28px" mr="16px" color={color} />
                Continue with Google
              </Button>
            </div>

          </div>

        </div>
      </main>
    </>
  )
}
