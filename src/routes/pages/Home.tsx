import { useCountStore } from '@/stores/count'
import { useUserStore } from '@/stores/user'
import { useState, useEffect } from 'react'
import { produce } from 'immer'

export default function HomePage() {
  const count = useCountStore(state => state.count)
  const double = useCountStore(state => state.double)
  const increase = useCountStore(state => state.increase)
  const decrease = useCountStore(state => state.decrease)

  const user = useUserStore(state => state.user)
  const setUserEmail = useUserStore(state => state.setUserEmail)
  const [obj, setObj] = useState({
    user: {
      address: {
        email: [{ host: 'gmail', name: 'neo1' }]
      }
    }
  })
  useEffect(() => {
    setObj(obj => {
      return produce(obj, draft => {
        draft.user.address.email[0].name = 'heropy'
      })
    })
  }, [])

  // setObj({
  //   ...obj,
  //   user: {
  //     address: {
  //       emails: [

  //       ]
  //     }
  //   }
  // })
  return (
    <>
      <h1>Home Page!</h1>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>

      <hr />

      {/* User */}
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={() => setUserEmail('thesecon@gmail.com')}>버튼</button>
    </>
  )
}
