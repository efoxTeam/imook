import React from 'react'
import {Random} from '../Random'

import {useTracked} from './state'

let numRendered = 0
const Input = ({name, setState, state}: any) => {
  return (
    <div>
      First Name:
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
  const [state, setState] = useTracked()
  return (
    <div>
      numRendered: {++numRendered}
      <Random />
      <Input name={'firstName'} state={state} setState={setState} />
      <Input name={'lastName'} state={state} setState={setState} />
      <Input name={'age'} state={state} setState={setState} />
    </div>
  )
}

export default Person
