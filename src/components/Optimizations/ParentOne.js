import { useState } from "react"

export const ParentOne = ({ children }) => {
    const [count, setCount] = useState(0);

    console.log('Parent One render');
    // passing as children, will not trigger rerender for children, and only for parent
    // React does this optimization automatically as props will not change, so child will not change
    return (
        <div>
            {/* <h1>Parent One Child Demo</h1> */}
            <button onClick={() => setCount((c) => c + 1)}>
                Count - {count}
            </button>
            {children}
        </div>
    )
}