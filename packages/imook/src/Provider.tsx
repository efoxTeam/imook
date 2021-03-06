import * as React from 'react'
import {TscopeStore} from './createLocalStore'
import {ChiProvider} from './types/store'

export interface ComProviderProps {
  stores: TscopeStore[]
  children: React.ReactNode
}

function composeProviders(providers: ChiProvider[]): ChiProvider {
  const CompProvider = ({children}: {children: React.ReactNode}) => (
    <>
      {providers.reduce(
        (prev, Provider) => (
          <Provider>{prev}</Provider>
        ),
        children,
      )}
    </>
  )

  return CompProvider
}

const Provider = ({stores, children}: ComProviderProps): JSX.Element => {
  const CompProvider = composeProviders(stores.map(({Provider}) => Provider))
  return <CompProvider>{children}</CompProvider>
}

type ReFC = React.FC<Record<string, any>>

export const withStores = (Component: (props: any) => JSX.Element, stores: ComProviderProps['stores']): ReFC => {
  const Wrapper: ReFC = props => (
    <Provider stores={stores}>
      <Component {...props} />
    </Provider>
  )

  return Wrapper
}

export default Provider
