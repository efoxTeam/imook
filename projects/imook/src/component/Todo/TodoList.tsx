import React from 'react'

import todoStore from './todoStore'
import TodoItem from './TodoItem'

const TodoList: React.FC = () => {
  const [{todos}] = todoStore.useStore()
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
