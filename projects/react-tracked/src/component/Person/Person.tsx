import React from 'react'
import {Random} from '../Random'

import {useTracked} from './state'

let numRendered = 0
const FristName = ({name, setState}: any) => {
  return (
    <div>
      First Name:
      <input
        value={name}
        onChange={event => {
          const firstName = event.target.value
          setState((s: any) => ({
            ...s,
            person: {
              ...s.person,
              firstName,
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
      <FristName name={state.person.firstName} setState={setState} />
      <div>
        Last Name:
        <input
          value={state.person.lastName}
          onChange={event => {
            const lastName = event.target.value
            setState(s => ({
              ...s,
              person: {
                ...s.person,
                lastName,
              },
            }))
          }}
        />
      </div>
      <div>
        Age:
        <input
          value={state.person.age}
          onChange={event => {
            const age = Number(event.target.value) || 0
            setState(s => ({
              ...s,
              person: {
                ...s.person,
                age,
              },
            }))
          }}
        />
      </div>
    </div>
  )
}

export default Person
