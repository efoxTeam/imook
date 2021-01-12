/// <reference types="react" />
import { TupleTail } from './common';
import { Draft } from 'immer';
export declare type DraftStore<I = any> = Draft<{
    state: I;
}>;
export declare type Updater<I = any> = (dratfStore: DraftStore<I>) => void;
export declare type UpdateStore<I = any> = (updater: Updater<I>) => I;
export interface ActUtil<I = any> {
    commit: UpdateStore<I>;
    stateRef: React.MutableRefObject<I>;
}
export interface ActionCreator<I> {
    (actUtil: ActUtil<I>, ...args: any[]): any;
}
export declare type ActionCreatorsMapObject<I, A> = Record<keyof A, ActionCreator<I>>;
export declare type Actions<I, A extends ActionCreatorsMapObject<I, A>> = {
    [P in keyof A]: (...args: TupleTail<Parameters<A[P]>>) => void;
};
export declare type SubCtsxMapObject<S, T> = {
    [P in keyof S]: React.Context<T>;
};
export interface ChiProvider {
    ({ children }: {
        children: React.ReactNode;
    }): JSX.Element;
}
export interface ScopeStore<I, A extends ActionCreatorsMapObject<I, A>, S extends Record<string, (state: I) => any>> {
    Provider: ChiProvider;
    useActions: () => Actions<I, A>;
    useStore: () => [I, Actions<I, A>];
    useSubscribe: <K extends keyof S>(subKey: K) => ReturnType<S[K]>;
}
