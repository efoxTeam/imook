import React from 'react'
import {useCounter} from 'src/component/Counter/counterStore'
import {Random} from '../Random'

const TextBox = () => {
  const [state] = useCounter()
  return (
    <>
      {state.text}
      <Random />
    </>
  )
}

export default TextBox
