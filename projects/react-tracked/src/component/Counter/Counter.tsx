import React from 'react'
import {useCounter} from 'src/component/Counter/counterStore'
import {Random} from '../Random'
const Counter = () => {
  const [state, setTracked] = useCounter()
  console.log('Counter')
  const increment = () => {
    setTracked((prev: any) => {
      return {
        ...prev,
        count: prev.count + 1,
      }
    })
  }
  return (
    <div>
      <span>Count: {state.count}</span>
      <button type="button" onClick={increment}>
        +1
      </button>
      <Random />
    </div>
  )
}

export default Counter
