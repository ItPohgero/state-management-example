'use client'
import { useCounterStore } from '../setup/zustand/store';

const ZustandCounterComponent: React.FC = () => {
    const { count, increment, decrement } = useCounterStore();

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

const UsageZustand: React.FC = () => {
    return (
        <ZustandCounterComponent />
    );
};

export default UsageZustand;