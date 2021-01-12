/// <reference types="react" />
import createLocalStore from './createLocalStore';
import Provider, { withStores } from './Provider';
import { ActUtil } from './types/store';
export { createLocalStore, Provider, withStores, ActUtil };
declare const _default: {
    createLocalStore: typeof createLocalStore;
    Provider: ({ stores, children }: import("./Provider").ComProviderProps) => JSX.Element;
    withStores: (Component: (props: any) => JSX.Element, stores: import("./types/store").ScopeStore<unknown, Record<string | number | symbol, import("./types/store").ActionCreator<any>>, Record<string, (state: any) => any>>[]) => import("react").FC<{}>;
};
export default _default;
