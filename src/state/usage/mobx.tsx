'use client'
import { useMobxStore } from '../setup/mobx/hooks';
import { observer } from "mobx-react-lite";

const MobxCounterComponent = observer(() => {
    const store = useMobxStore();

    return (
        <div className="bg-neutral-50 w-full p-4 rounded-lg">
            <p className="text-center">Count: {store.count}</p>
            <div className="flex justify-between mt-4">
                <button type='button' onClick={() => store.increment()}>In</button>
                <button type='button' onClick={() => store.decrement()}>De</button>
            </div>
        </div>
    );
});

export default function UsageMobx() {
    return (
        <MobxCounterComponent />
    );
}