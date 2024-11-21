import DelayedData from '@/components/DelayedData'
import { useQuery } from '@tanstack/react-query'

export default function DelayPage() {
  //   const { data } = useQuery({
  //     queryKey: ['delay'],
  //     queryFn: async () => {
  //       const resp = await fetch('https://api.heropy.dev/v0/delay?t=2000')
  //       return await resp.json()
  //     }
  //   })
  return (
    <>
      <h1>delay page!</h1>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <DelayedData time={1000} />
      <DelayedData time={3000} />
      <DelayedData time={5000} />
    </>
  )
}
