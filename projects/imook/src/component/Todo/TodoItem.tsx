import React from 'react'
import {memo} from '@efox/imook'
import {Random} from '../Random'

import todoStore, {TodoType} from './todoStore'

type Props = {
  todo: TodoType
}

let numRendered = 0

// Use custom memo instead of React.memo
const TodoItem: React.FC<Props> = memo(({todo}: Props) => {
  const {toggleTodo} = todoStore.useActions()
  return (
    <li>
      numRendered: {++numRendered}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => {
          toggleTodo(todo.id)
        }}
      />
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}>
        {todo.title}
      </span>
      <Random />
    </li>
  )
})

export default TodoItem
