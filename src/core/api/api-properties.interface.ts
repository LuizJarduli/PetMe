export interface KeyValue<T, U> {
    key: T;
    value: U;
}

export type ApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';