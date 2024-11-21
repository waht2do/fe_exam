import { useParams } from 'react-router-dom'
import { useFetchTodos, useUpdateTodo } from '@/hooks/todo'
import type { Todo } from '@/hooks/todo'
import Modal from '@/components/Modal'
import { useState, useEffect } from 'react'

export default function Todo() {
  const [title, setTitle] = useState('')
  const { todoId } = useParams()
  const { mutate } = useUpdateTodo()
  const { data: todos } = useFetchTodos()

  // let todo: Todo | undefined
  const todo = todos?.find(todo => todo.id === todoId)
  useEffect(() => {
    console.log('todos', todos)
    setTitle(todo?.title || '')
  }, [todo, todoId])

  return (
    <Modal>
      {todo && (
        <>
          <div>{JSON.stringify(todo.done)}</div>
          <div>
            <textarea
              style={{ width: '100%', padding: 10, boxSizing: 'border-box' }}
              value={title}
              rows={4}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div>{todo.createdAt}</div>
          <div>{todo.updatedAt}</div>
        </>
      )}
    </Modal>
  )
}
