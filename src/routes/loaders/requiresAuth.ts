import { redirect } from 'react-router-dom'

// searchParams = 쿼리스트링
// search = 쿼리스트링

export function requiresAuth({ request }: { request: Request }) {
  console.log(request.url) // 'http://localhost:5173/dashboard'
  const url = new URL(request.url)
  const callbackUrl = url.pathname + url.search
  const token = localStorage.getItem('token')
  // const user = await 서버에서_사용자_인증(액세스토큰)
  if (token) {
    return {
      name: 'Heropy',
      age: 85
    }
  }
  return redirect(`/signin?callbackUrl=${encodeURIComponent(callbackUrl)}`)
}
