import React, {FC} from 'react'
import counterStore from 'src/store/counterStore'

const Counter: FC = () => {
  // 返回[state, actions]
  const [count, {inc, dec}] = counterStore.useStore()
  return (
    <div>
      count:{count}
      <button onClick={() => inc()}>+</button>
      <button onClick={() => dec()}>-</button>
    </div>
  )
}
const ResetBtn: FC = () => {
  // 读写分离，不会重渲染
  const {reset} = counterStore.useActions()
  return <button onClick={() => reset()}>reset</button>
}

export default function CounterComp(): any {
  return (
    <counterStore.Provider>
      <Counter />
      <Counter />
      <ResetBtn />
    </counterStore.Provider>
  )
}
