import * as React from 'react'
import {ActionCreatorsMapObject, Actions, ScopeStore, UpdateStore} from './types/store'
import produce from 'immer'
import {createContainer} from 'react-tracked'

const UNIQUE_SYMBOL = Symbol()

export default function createLocalStore<I, A extends ActionCreatorsMapObject<I, A>>(
  initialState: I,
  actionCreatorsMap: A,
): ScopeStore<I, A> {
  const DispatcherContext = React.createContext<Actions<I, A> | typeof UNIQUE_SYMBOL>(UNIQUE_SYMBOL)
  const useMyState = () => React.useState(initialState)
  const {Provider: TrackProvider, useTracked} = createContainer(useMyState)

  function ActionProvider({children}: {children: React.ReactNode}) {
    const [trackState, setTrackState] = useTracked()
    const stateRef = React.useRef(trackState)

    // persist Actions
    const memoActions = React.useMemo(() => {
      const actions = {} as Actions<I, A>
      const updateStore: UpdateStore<I> = updater => {
        const {state} = produce({state: stateRef.current}, updater)
        stateRef.current = state
        setTrackState(state)
        return state
      }
      for (const key in actionCreatorsMap) {
        actions[key] = (...args: any[]) => actionCreatorsMap[key]({commit: updateStore, stateRef}, ...args)
      }
      return actions
    }, [setTrackState])

    return <DispatcherContext.Provider value={memoActions}>{children}</DispatcherContext.Provider>
  }

  function Provider({children}: {children: React.ReactNode}) {
    return (
      <TrackProvider>
        <ActionProvider>{children}</ActionProvider>
      </TrackProvider>
    )
  }

  function useActions() {
    const value = React.useContext(DispatcherContext)
    if (value === UNIQUE_SYMBOL) {
      throw new Error('Component must be wrapped with Provider')
    }
    return value
  }

  const useStore = (): [I, Actions<I, A>] => {
    return [useTracked()['0'], useActions()]
  }

  return {
    Provider,
    useActions,
    useStore,
  }
}

export type TscopeStore = ReturnType<typeof createLocalStore>
