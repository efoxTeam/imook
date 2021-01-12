declare const EMPTY_OBJ: {};
export declare type EmptyObj = typeof EMPTY_OBJ;
export declare type TupleTail<T extends any[]> = ((...t: T) => void) extends (x: any, ...t: infer R) => void ? R : T;
export {};
