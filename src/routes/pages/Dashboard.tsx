import { useLoaderData } from 'react-router-dom'

export default function DashboardPage() {
  const user = useLoaderData()
  return (
    <>
      <h1>dashboard page</h1>
      <p>{JSON.stringify(user)}</p>
    </>
  )
}
