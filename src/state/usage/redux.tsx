'use client'

import { Provider, useDispatch, useSelector } from "react-redux";
import { store, type RootState } from "../redux/store";
import { decrement, increment } from "../redux/slice/counter";

const CounterComponent = () => {
    const count = useSelector((root: RootState) => root.counter.count)
    const dispacth = useDispatch()
    return (
        <div className="bg-neutral-50 w-full p-4 rounded-lg">
            <p className="text-center">Count: {count}</p>
            <div className="flex justify-between mt-4">
                <button type='button' onClick={() => dispacth(increment())}>In</button>
                <button type='button' onClick={() => dispacth(decrement())}>De</button>
            </div>
        </div>
    );
};

export default function UsageRedux() {
    return (
        <Provider store={store}>
            <CounterComponent />
        </Provider>
    );
}
