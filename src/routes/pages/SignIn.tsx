import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function SignInPage() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    // http://localhost:5173/signin?a=1&b=2

    // 방법 1
    searchParams.set('a', '1')
    searchParams.set('b', '2')
    setSearchParams(searchParams, {
      replace: true //
    })
    // 방법 2
    // setSearchParams({
    //   a: '1',
    //   b: '2'
    // })
  }, [])
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formdata = new FormData(event.currentTarget)
    const id = formdata.get('id')
    const pw = formdata.get('pw')
    console.log(id, pw)
    if (id && pw) {
      localStorage.setItem('token', 'qwexf123rwefd')
      const callbackUrl = searchParams.get('callbackUrl')
      navigate(callbackUrl || '/')
    }
  }
  return (
    <>
      <h1> Sign In Page ! </h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="아이디를 입력하세요"
          name="id"
        />
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          name="pw"
        />
        <button type="submit">로그인</button>
      </form>
    </>
  )
}
