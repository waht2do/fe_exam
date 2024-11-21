import { useQuery } from '@tanstack/react-query'

export default function DelayedData({ time }: { time: number }) {
  const { data } = useQuery<{
    message: string
    time: string
  }>({
    queryKey: ['delay', time],
    queryFn: async () => {
      const res = await fetch(`https://api.heropy.dev/v0/delay?t=${time}`)
      return await res.json()
    },
    staleTime: 1000,
    initialData: {
      message: 'Hello world',
      time: new Date().toISOString()
    },
    refetchInterval: 5000
    // enabled: false
  })
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
