import React from 'react'
import {Random} from '../Random'
import {observer} from 'mobx-react'
import store from './store'

const Input = observer((props: any) => {
  const {name}: {name: 'age' | 'firstName' | 'lastName'} = props
  return (
    <div>
      {name}:{store.data.person[name]} -
      <input
        value={store.data.person[name]}
        onChange={event => {
          const v = event.target.value
          store.setPerson(name, v)
        }}
      />
      <Random />
    </div>
  )
})
const Counter = observer(() => {
  return (
    <div>
      <Random />
      <span>Count: {store.data.count}</span>
      <button type="button" onClick={() => store.inc()}>
        +1
      </button>
    </div>
  )
})

const Person: React.FC = () => {
  return (
    <div>
      <Counter />
      <Random />
      <Input name={'firstName'} />
      <Input name={'lastName'} />
      <Input name={'age'} />
    </div>
  )
}

export default Person
