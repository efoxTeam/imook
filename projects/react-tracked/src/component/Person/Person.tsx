import React from 'react'
import {Random} from '../Random'

import {useTracked} from './state'

let numRendered = 0
const Input = ({name}: any) => {
  const [state, setState]: any = useTracked()
  return (
    <div>
      {name}:
      <input
        value={state.person[name]}
        onChange={event => {
          const person: any = {}
          person[name] = event.target.value
          setState((s: any) => ({
            ...s,
            person: {
              ...s.person,
              ...person,
            },
          }))
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
