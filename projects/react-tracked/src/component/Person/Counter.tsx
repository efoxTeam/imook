import React from 'react'
import {Random} from '../Random'

import {useTracked} from './state'

let numRendered = 0

const Counter: React.FC = () => {
  const [state, setState] = useTracked()
  const increment = () => {
    setState(s => ({
      ...s,
      count: s.count + 1,
    }))
  }
  return (
    <div>
      numRendered: {++numRendered}
      <Random />
      <div>
        <span>Count: {state.count}</span>
        <button type="button" onClick={increment}>
          +1
        </button>
      </div>
    </div>
  )
}

export default Counter
