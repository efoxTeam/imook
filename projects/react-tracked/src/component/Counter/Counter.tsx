import React, {useCallback} from 'react'
import {useCounter} from 'src/component/Counter/counterStore'
import {Random} from '../Random'
const Counter = () => {
  const [state, setTracked] = useCounter()

  const increment = useCallback(() => {
    console.log('Counter increment')
    setTracked((prev: any) => {
      return {
        ...prev,
        count: prev.count + 1,
      }
    })
  }, [setTracked])
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
