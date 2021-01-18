import React from 'react'
import {Random} from '../Random'

import {useDispatch, useTrackedState} from './store'

let numRendered = 0
const Input = ({name, state}: any) => {
  const dispatch = useDispatch()
  return (
    <div>
      First Name:
      <input
        value={state.person[name]}
        onChange={event => {
          const v = event.target.value
          switch (name) {
            case 'firstName':
              dispatch({type: 'SET_FIRSTNAME', firstName: v})
              break
            case 'lastName':
              dispatch({type: 'SET_LASTNAME', lastName: v})
              break
            case 'age':
              dispatch({type: 'SET_AGE', age: parseInt(v)})
              break
          }
        }}
      />
      <Random />
    </div>
  )
}

const Person: React.FC = () => {
  const state = useTrackedState()
  return (
    <div>
      numRendered: {++numRendered}
      <Random />
      <Input name={'firstName'} state={state} />
      <Input name={'lastName'} state={state} />
      <Input name={'age'} state={state} />
    </div>
  )
}

export default Person
