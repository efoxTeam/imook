import React, {StrictMode} from 'react'

import {Provider} from './store'

import Counter from './Counter'
import Person from './Person'

const App: React.FC = () => (
  <StrictMode>
    <Provider>
      <h2>===== Redux =====</h2>
      <h3>Counter</h3>
      <Counter />
      <h3>Person</h3>
      <Person />
    </Provider>
  </StrictMode>
)

export default App
