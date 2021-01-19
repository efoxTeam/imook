import React from 'react'
import counterStore from './counterStore'
import Counter from 'src/component/Counter/Counter'
import TextBox from 'src/component/Counter/TextBox'
const App = () => (
  <counterStore.Provider>
    <Counter />
    <TextBox />
  </counterStore.Provider>
)
export default App
