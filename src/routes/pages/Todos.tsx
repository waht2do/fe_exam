import { useState } from 'react'
import { useFetchTodos, useCreateTodo } from '@/hooks/todo'
import Loader from '@/components/Loader'

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
        <>
          {todos?.map(todo => {
            return <li key={todo.id}>{todo.title}</li>
          })}
        </>
      )}
    </>
  )
}
