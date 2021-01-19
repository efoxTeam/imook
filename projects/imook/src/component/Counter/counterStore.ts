import {createLocalStore, ActUtil} from '@efox/imook'

// 创建counterStore
const initialState = {
  count: 0,
  text: 'hello',
}
type CounterActUtil = ActUtil<typeof initialState>

const counterStore = createLocalStore(initialState, {
  inc({commit}: CounterActUtil, step = 1) {
    commit(draftStore => {
      draftStore.state.count += step
    })
  },
  reset({commit, stateRef}: CounterActUtil) {
    console.log(`stateRef`, stateRef.current)
    commit(draftStore => {
      draftStore.state.count = initialState['count']
    })
  },
})

export default counterStore
