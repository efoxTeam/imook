import React, {StrictMode} from 'react'

import {Provider} from './state'

import Counter from './Counter'
import Person from './Person'

const App: React.FC = () => (
  <StrictMode>
    <Provider>
      <h2>Counter</h2>
      <Counter />
      <Counter />
      <h2>Person</h2>
      <Person />
      <Person />
    </Provider>
  </StrictMode>
)

export default App
