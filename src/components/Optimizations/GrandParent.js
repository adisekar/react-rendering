import { useState } from "react"
import { ChildOne } from "./ChildOne";
import { ParentOne } from "./ParentOne";

export const GrandParent = () => {
    const [count, setCount] = useState(0);

    console.log('Grandparent render');
    return (
        <div>
            <h1>Grandparent Demo</h1>
            <button onClick={() => setCount((c) => c + 1)}>
                Grandparent Count - {count}
            </button>
            <ParentOne newCount={count}>
                <ChildOne />
            </ParentOne>
        </div>
    )
}