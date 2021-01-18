import React from 'react'
import {Random} from '../Random'

import {useDispatch, useTrackedState} from './store'

let numRendered = 0
const Input = ({name}: any) => {
  const dispatch = useDispatch()
  const state: any = useTrackedState()
  return (
    <div>
      {name}:
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
  return (
    <div>
      numRendered: {++numRendered}
      <Random />
      <Input name={'firstName'} />
      <Input name={'lastName'} />
      <Input name={'age'} />
    </div>
  )
}

export default Person
