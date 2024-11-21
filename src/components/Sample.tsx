import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

function Popup() {
  const { data } = useQuery({
    queryKey: ['popup'],
    queryFn: async () => {
      return true
    }
  })
  return <div>Popup!!({JSON.stringify(data)})</div>
}

export default function Sample() {
  const [isShow, setIsShow] = useState(false)

  return (
    <>
      <button onClick={() => setIsShow(val => !val)}>토글</button>
      {isShow && <Popup />}
    </>
  )
}
