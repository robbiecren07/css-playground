import Layout from '@/components/Layout';
import { useAuth } from '@/lib/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'

import styles from '../styles/Dashboard.module.scss'

export default function Login() {

  const auth = useAuth()

  return (
    <main className={styles.main}>
      <div className={styles.auth_wrap}>

        <div className={styles.auth_form}>
          <h1>Log Into My Account</h1>

          <div className={styles.btn}>
            <button className={styles.btn_inner} onClick={(e) => auth.signinWithGitHub('/dashboard')}>
              <FontAwesomeIcon icon={faGithub} size="2x" />
              <span>Sign in with GitHub</span>
            </button>
          </div>

          <div className={styles.btn}>
            <button className={styles.btn_inner} onClick={(e) => auth.signinWithGoogle('/dashboard')}>
              <img src="/google-icon.svg" width="32" height="32" />
              <span>Sign in with Google</span>
            </button>
          </div>

        </div>

      </div>
    </main>
  )
}
