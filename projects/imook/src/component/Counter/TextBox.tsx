import React from 'react'
import counterStore from './counterStore'
import {Random} from '../Random'

const TextBox = () => {
  const [state] = counterStore.useStore()
  return (
    <>
      {state.text}
      <Random />
    </>
  )
}

export default TextBox
