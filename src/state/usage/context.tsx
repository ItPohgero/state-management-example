'use client'

import { CounterProvider, useCounter } from "../context/setup";

const CounterComponent = () => {
    const { count, increment, decrement } = useCounter();
    return (
        <div className="bg-neutral-50 w-full p-4 rounded-lg">
            <p className="text-center">Count: {count}</p>
            <div className="flex justify-between mt-4">
                <button type='button' onClick={increment}>In</button>
                <button type='button' onClick={decrement}>De</button>
            </div>
        </div>
    );
};

export default function UsageContext() {
    return (
        <CounterProvider>
            <CounterComponent />
        </CounterProvider>
    );
}
