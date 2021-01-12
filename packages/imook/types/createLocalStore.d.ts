import { ActionCreatorsMapObject, ScopeStore } from './types/store';
export default function createLocalStore<I, A extends ActionCreatorsMapObject<I, A>, S extends Record<string, (state: I) => any>>(initialState: I, actionCreatorsMap: A, subscriptionsMap?: S): ScopeStore<I, A, S>;
export declare type TscopeStore = ReturnType<typeof createLocalStore>;
