import { useState, useEffect } from 'react'
import { useUserStore } from '@/stores/user'
import { useCountStore } from '@/stores/count'
import { produce } from 'immer'

export default function HomePage() {
  // Count
  const count = useCountStore(state => state.count)
  const double = useCountStore(state => state.double)
  const increase = useCountStore(state => state.increase)
  const decrease = useCountStore(state => state.decrease)

  // User
  const user = useUserStore(state => state.user)
  const setUserEmail = useUserStore(state => state.setUserEmail)
  const [obj, setObj] = useState({
    user: {
      address: {
        emails: [{ host: 'gmail', name: 'neo1' }]
      }
    }
  })

  useEffect(() => {
    console.log(obj)
    setObj(obj =>
      produce(obj, draft => {
        draft.user.address.emails[0].name = 'HEROPY'
      })
    )
  }, [])

  return (
    <>
      <h1>Home Page!</h1>

      {/* Count */}
      <h2>
        {count} / {double}
      </h2>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>

      <hr />

      {/* User */}
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={() => setUserEmail('thesecon@gmail.com')}>버튼</button>
    </>
  )
}
