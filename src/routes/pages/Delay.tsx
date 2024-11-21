// import { useQuery } from '@tanstack/react-query'
import DelayedData from '@/components/DelayedData'

export default function DelayPage() {
  // const { data } = useQuery({
  //   queryKey: ['delay'],
  //   queryFn: async () => {
  //     const res = await fetch('https://api.heropy.dev/v0/delay?t=2000')
  //     return await res.json()
  //   }
  // })
  return (
    <>
      <h1>DelayPage!</h1>
      <DelayedData time={1000} />
      <DelayedData time={3000} />
      <DelayedData time={5000} />
    </>
  )
}

// RESTful API
// curl https://api.heropy.dev/v0/user/delete
// -X POST

// CRUD
// GET(조회), POST(생성), PUT(전체 수정), PATCH(일부 수정), DELETE(삭제)

// useQuery
// useInfiniteQuery
//// GET(조회)

//-----------------------

// useMutation
//// POST(생성)
//// PUT(전체 수정)
//// PATCH(일부 수정)
//// DELETE(삭제)
