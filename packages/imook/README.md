# @efox/imook

基于[immer](https://immerjs.github.io/immer/docs/introduction)和[react hooks](https://reactjs.org/docs/hooks-intro.html)的轻量的局部状态管理，类比custom hook，@efox/imook强调基于功能设计store。

<table>
  <thead>
    <tr>
      <th colspan="3">🎯 案例🎯 </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://codesandbox.io/s/counter-tracked-68lq9" rel="nofollow">Counter</a></td>
      <td><a href="https://codesandbox.io/s/i18n-track-mffq5" rel="nofollow">I18n</a></td>
      <td><a href="https://codesandbox.io/s/todos-tracked-w5pm3" rel="nofollow">Todos</a></td>
    </tr>
  </tbody>
</table>
<br />

## ✨特性
+ 局部状态管理，精准定位store作用区间
+ 无this, 状态不可变
+ 支持异步action，修改状态简单化
+ 支持读写分离和定制更新(衍生数据)
+ 支持中断更新和批量更新同步逻辑

## 📦 安装

```sh
npm i @efox/imook
```

```sh
yarn add @efox/imook
```

## ⚡快速开始

#### 1. 定义一个local store
```tsx
import React from "react"
import { createLocalStore, ActUtil } from "@efox/imook";

// 创建counterStore
const initialState: number = 0
type CounterActUtil = ActUtil<number>;

export default createLocalStore(initialState, {
  inc({ commit }: CounterActUtil, step = 1) {
    commit((draftStore) => {
      draftStore.state += step;
    })
  },
});
```

#### 2. 使用和修改状态

```tsx
import counterSotre from "./counterStore"

function Counter() {
  // 返回[state, actions]
  const [count, { inc }] = counterStore.useStore()
  return (
    <div>
      count:{count}
      <button onClick={inc}>+</button>
    </div>
  )
}

export default function Counter() {
  return (
    <counterStore.Provider>
      <Counter />
    </counterStore.Provider>
  )
}
```

## 💡API
### ```createLocalStore(initialState, actionCreators)```
createLocalStore接收初始状态initialState和用于修改状态的[actionCreators](#actioncreators)，返回一个[localStore](#localstore)对象

#### ```actionCreators```
action生成器对象，属性为任意的函数，函数第一个参数默认为ActUtil（action的工具类）。
```ts
import { ActUtil } from "@efox/imook";
const actionCreators = {
  actionName({commit, stateRef}: ActUtil<StateType>, ...args: any[]) {
    /** 
     * stateRef存储当前state的Ref
     */

   // stateRef.current...

    /**
     * commit 用于修改状态, 接受一个函数updater作为参数
     * updater和immer中的produce的第二个参数保持一致
     * 通过操作draftStore.state完成对state的修改
     */
    commit((draftStore) => {
      // draftStore.state...
    });
    // ...
  }
}
```

#### ```localStore```
局部的store, 包含作用区间的Provider和对应的hooks方法；多个store之间可以通过imook暴露的withStores或Provider进行自动组合。
```tsx
import {createLocalStore, Provider, withStores} from "@efox/imook"

const localStore = createLocalStore(initialState, actionCreators [, subscriptions])
// 需要读写状态的组件使用useStore, 返回一个元组，包含state和actions对象
function Component() {
  const [state, actions] = localStore.useStore()
  // ...
}

// 只需要写状态的组件使用useActions, 返回一个actions对象，组件不会触发重渲染
function Component() {
  const actions = localStore.useActions()
  // ...
}

// 通过useSubscribe获取订阅项，参数为subscriptions的属性名
function Component() {
  const xxx = localStore.useSubscribe('xxx')
  // ...
}

// 不需要组合stores，直接用localStore提供的Provider包裹Component即可
export default function App() {
  return (
    <localStore.Provider>
     <Component />
    </localStore.Provider>
  )
}

// 组合stores
const stores = [localStore]

// 方式1：使用Provider
export default function App() {
  return (
    <Provider stores={stores}>
     <Component />
    </Provider>
  )
}
// 方式2：使用withStores
function App() {
  return (
     <Component />
  )
}
export default withStores(App, stores)
```


