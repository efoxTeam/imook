import {TupleTail} from './common'
import {Draft} from 'immer'

export type DraftStore<I = any> = Draft<{state: I}>

export type Updater<I = any> = (dratfStore: DraftStore<I>) => void

export type UpdateStore<I = any> = (updater: Updater<I>) => I

export interface ActUtil<I = any> {
  commit: UpdateStore<I>
  stateRef: React.MutableRefObject<I>
}

export interface ActionCreator<I> {
  (actUtil: ActUtil<I>, ...args: any[]): any
}

export type ActionCreatorsMapObject<I, A> = Record<keyof A, ActionCreator<I>>

export type Actions<I, A extends ActionCreatorsMapObject<I, A>> = {
  [P in keyof A]: (...args: TupleTail<Parameters<A[P]>>) => ReturnType<A[P]>
}
export interface ChiProvider {
  ({children}: {children: React.ReactNode}): JSX.Element
}

export interface ScopeStore<I, A extends ActionCreatorsMapObject<I, A>> {
  Provider: ChiProvider
  useActions: () => Actions<I, A>
  useStore: () => [I, Actions<I, A>]
}
