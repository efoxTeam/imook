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
  dec({commit}: CounterActUtil) {
    commit(draftStore => {
      draftStore.state -= 1
    })
  },
  reset({commit}: CounterActUtil) {
    commit(draftStore => {
      draftStore.state = initialState
    })
  },
})

export default counterStore
