import { useReducer } from "react"

const initialState = 0;

const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action) {
        case 'increment': return state + 1;
        case 'decrement': return state - 1;
        case 'reset': return initialState;
        case 'default': return state;
    }
}
export const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    console.log('Use Reducer render');
    // Same as UseState render cycle
    // Component will rererender only when state is different count. If initial rerender, 
    // it wont rerender if state not changed.
    // If already rerendered, then react will rerender one more time, if state is same, for primitive type


    return (
        <div>
            <h1>Use Reducer Demo</h1>
            <div>{count}</div>
            <button onClick={() => dispatch('increment')}>
                Increment
            </button>
            <button onClick={() => dispatch('decrement')}>
                Decrement
            </button>
            <button onClick={() => dispatch('reset')}>
                Reset
            </button>
        </div>
    )
}