import useSWR from 'swr'
import { useAuth } from '@/lib/auth'
import fetcher from '@/utils/fetcher'
import DashboardShell from '@/components/DashboardShell'

// import styles from '../../styles/Dashboard.module.scss'

const Dashboard = () => {
  const { user } = useAuth()
  const { data } = useSWR(user ? ['/api/sites', user.token] : null, fetcher)
  const isPaidAccount = user?.stripeRole !== 'free'

  if (!data) {
    return (
      <DashboardShell>
        <h1>No Data</h1>
      </DashboardShell>
    )
  }

  if (data.sites.length) {
    return (
      <DashboardShell>
        <h1>Has Sites</h1>
      </DashboardShell>
    )
  }

  return (
    <DashboardShell>
      <h1>Empty</h1>
    </DashboardShell>
  )
  
}

export default function DashboardPage() {
    
  return (
    <Dashboard />
  )

}
