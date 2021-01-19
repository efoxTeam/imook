import React from 'react'
import counterStore from './counterStore'
import {Random} from '../Random'
const Reset = () => {
  const {reset} = counterStore.useActions()

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          reset()
        }}>
        reset
      </button>
      <Random />
    </div>
  )
}

const Counter = () => {
  const [state, {inc}] = counterStore.useStore()
  return (
    <div>
      <span>Count: {state.count}</span>
      <button
        type="button"
        onClick={() => {
          inc()
        }}>
        +1
      </button>
      <Random />
    </div>
  )
}

const CounterComp = () => (
  <>
    <Counter />
    <Reset />
  </>
)

export default CounterComp
