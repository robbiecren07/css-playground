import useSWR from 'swr'
import { useAuth } from '@/lib/auth'
import fetcher from '@/utils/fetcher'
import DashboardShell from '@/components/DashboardShell'

// import styles from '../../styles/Dashboard.module.scss'

async function gitFetcher(...arg) {
  const res = await fetch(...arg)

  return res.json()
}

const Dashboard = () => {
  const { user } = useAuth()
  //const { data } = useSWR(user ? ['/api/sites', user.token] : null, fetcher)
  const { data } = useSWR('../api/github', gitFetcher)
  const isPaidAccount = user?.stripeRole !== 'free'

  if (user?.email === 'robbiecfreelance@gmail.com') {  
    return (
      <DashboardShell>
        <h1>Has Sites</h1>
        { data ? data.starred : 'loading' }
      </DashboardShell>
    )
  }

  if (!user) {
    return (
      <DashboardShell>
        <h1>No Data</h1>
      </DashboardShell>
    )
  }

  return (
    <DashboardShell>
      <h1>Please Login</h1>
    </DashboardShell>
  )
  
}

export default function DashboardPage() {
    
  return (
    <Dashboard />
  )

}
