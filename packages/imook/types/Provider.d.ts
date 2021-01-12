import * as React from 'react';
import { TscopeStore } from './createLocalStore';
export interface ComProviderProps {
    stores: TscopeStore[];
    children: React.ReactNode;
}
declare const Provider: ({ stores, children }: ComProviderProps) => JSX.Element;
export declare const withStores: (Component: (props: any) => JSX.Element, stores: ComProviderProps['stores']) => React.FC;
export default Provider;
