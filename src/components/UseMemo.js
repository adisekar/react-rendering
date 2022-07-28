import { useMemo, useState } from "react";

const isEven = (count) => {
    return count % 2 === 0 ? ' Even' : ' Odd';
};

// Use Memo caches the value of function
// UseCallback caches the function instance
export const UseMemo = () => {
    const [count, setCount] = useState(0);

    const memoizedIsEven = useMemo(() => isEven(count), [count]);

    console.log('Use Memo Rendered');

    return (
        <div>
            <h1>UseMemo Hook</h1>
            <button onClick={() => setCount((c) => c + 1)}>Count {count} {memoizedIsEven}</button>
        </div>
    )
}