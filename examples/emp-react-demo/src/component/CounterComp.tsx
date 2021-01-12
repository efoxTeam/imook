import React from 'react'
import counterStore from 'src/store/counterStore'

function Counter() {
  // 返回[state, actions]
  const [count, {inc}] = counterStore.useStore()
  return (
    <div>
      count:{count}
      <button onClick={() => inc()}>+</button>
    </div>
  )
}

export default function CounterComp(): any {
  return (
    <counterStore.Provider>
      <Counter />
    </counterStore.Provider>
  )
}
