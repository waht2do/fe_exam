import { redirect } from 'react-router-dom'

export async function requiresAuth({ request }: { request: Request }) {
  const url = new URL(request.url)
  const callbackUrl = url.pathname + url.search
  const token = localStorage.getItem('token')
  if (token) {
    // const resp = await fetch('https://api.helopy.dev/v1/me', {
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    // }) // server 에서 유효 토큰인지 판단.
    // const user = await resp.json()
    // if (user) {
    //   return user
    // }
    return {
      name: 'mj',
      age: 39
    }
  }
  //   return redirect('/signin')
  return redirect(`/signin?callbackUrl=${encodeURIComponent(callbackUrl)}`)
}
