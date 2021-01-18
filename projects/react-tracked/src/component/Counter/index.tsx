import React from 'react'
import {CounterProvider} from 'src/component/Counter/counterStore'
import Counter from 'src/component/Counter/Counter'
import TextBox from 'src/component/Counter/TextBox'
const App = () => (
  <CounterProvider>
    <Counter />
    <TextBox />
  </CounterProvider>
)
export default App
