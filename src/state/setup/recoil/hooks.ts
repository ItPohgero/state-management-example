import { useRecoilState } from 'recoil';
import { counterState } from './store';

export const useRecoilCounter = () => {
    const [count, setCount] = useRecoilState<number>(counterState);

    const increment = () => setCount((prevCount) => prevCount + 1);
    const decrement = () => setCount((prevCount) => prevCount - 1);

    return { count, increment, decrement };
};

