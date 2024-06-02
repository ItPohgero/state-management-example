import { observable, action } from 'mobx';

export interface CounterStore {
    count: number;
    reset: () => void;
    increment: () => void;
    decrement: () => void;
}

export const counterStore: CounterStore = observable({
    count: 0,
    reset: action(function reset(this: any) {
        this.count = 0;
    }),
    increment: action(function increment(this: any) {
        this.count += 1;
    }),
    decrement: action(function decrement(this: any) {
        this.count -= 1;
    }),
});
