import {createLocalStore, ActUtil} from '@efox/imook'

// 创建counterStore
const initialState = 0
type CounterActUtil = ActUtil<number>

const counterStore = createLocalStore(initialState, {
  inc({commit}: CounterActUtil, step = 1) {
    commit(draftStore => {
      draftStore.state += step
    })
  },
})

export default counterStore
