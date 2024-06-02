'use client'
import { RecoilRoot } from 'recoil';
import { useRecoilCounter } from '../setup/recoil/hooks';

const RecoilCounterComponent: React.FC = () => {
    const { count, increment, decrement } = useRecoilCounter();

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

const UsageRecoil: React.FC = () => {
    return (
        <RecoilRoot>
            <RecoilCounterComponent />
        </RecoilRoot>
    );
};

export default UsageRecoil;