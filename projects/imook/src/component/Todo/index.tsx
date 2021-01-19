import React from 'react'

import todoStore from './todoStore'
import TodoList from './TodoList'

const App: React.FC = () => (
  <todoStore.Provider>
    <TodoList />
  </todoStore.Provider>
)

export default App
