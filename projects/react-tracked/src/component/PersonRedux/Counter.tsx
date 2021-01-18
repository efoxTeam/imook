import React from 'react'
import {Random} from '../Random'

import {useDispatch, useTrackedState} from './store'

let numRendered = 0

const Counter: React.FC = () => {
  const state = useTrackedState()
  const dispatch = useDispatch()
  const increment = () => {
    dispatch({type: 'INC', count: 1})
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
