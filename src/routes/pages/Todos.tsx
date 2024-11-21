import { useState } from 'react'
import { useFetchTodos, useCreateTodo } from '@/hooks/todo'
import Loader from '@/components/Loader'
import { Link, Outlet } from 'react-router-dom'

export default function Todos() {
  const { data: todos, isLoading } = useFetchTodos()
  const { mutate } = useCreateTodo()
  const [title, setTitle] = useState('')

  function createTodo(event?: React.KeyboardEvent<HTMLInputElement>) {
    if (event?.nativeEvent.isComposing) return
    mutate(title) // mutationFn 실행!
  }

  return (
    <>
      <h1>Todos!</h1>

      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && createTodo(e)}
      />
      <button onClick={() => createTodo()}>추가</button>

      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {todos?.map(todo => {
            return (
              <li key={todo.id}>
                <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
              </li>
            )
          })}
        </ul>
      )}

      <Outlet />
    </>
  )
}
