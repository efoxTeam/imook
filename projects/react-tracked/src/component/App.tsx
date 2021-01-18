import React from 'react'
import Counter from 'src/component/Counter'
import Person from 'src/component/Person'
import Todo from './Todo'
const App = () => (
  <>
    <h1>Todo List</h1>
    <Todo />
    <h1>Count</h1>
    <Counter />
    <h1>Person</h1>
    <Person />
  </>
)
export default App
