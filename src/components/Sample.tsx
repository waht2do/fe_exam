import { useEffect, useState } from 'react'

export default function Sample() {
  const [count, setCount] = useState(0)
  const [double, setDouble] = useState(0)

  useEffect(() => {
    setDouble(count * 2)
  }, [count])

  return <></>
}
