import { useState } from "react"


export const UseState = () => {
    const [count, setCount] = useState(0);

    console.log('Use State render');
    // Component will rererender only when state is different count. If initial rerender, 
    // it wont rerender if state not changed.
    // If already rerendered, then react will rerender one more time, if state is same, for primitive type


    return (
        <div>
            <h1>Use State Demo</h1>
            <button onClick={() => setCount((c) => c + 1)}>
                Count - {count}
            </button>
            <button onClick={() => setCount(0)}>
                Count to 0
            </button>
            <button onClick={() => setCount(5)}>
                Count to 5
            </button>
        </div>
    )
}