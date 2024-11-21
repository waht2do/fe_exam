import { useQuery } from '@tanstack/react-query'

export default function DelayedData({ time }: { time: number }) {
  const { data } = useQuery<{
    message: string
    time: string
  }>({
    // queryKey: ['delay'],
    queryKey: ['delay', time],
    queryFn: async () => {
      const resp = await fetch(`https://api.heropy.dev/v0/delay?t=${time}`)
      return await resp.json()
    },
    staleTime: 1000,
    initialData: {
      message: 'hello world',
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
