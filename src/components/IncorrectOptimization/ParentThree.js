import { useState } from "react"
import { MemoizedChildFour } from "./ChildFour";
import { MemoizedChildThree } from "./ChildThree";

export const ParentThree = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Adi');
    console.log('Parent Three render');

    // props.children is a new reference, React memo will not work, if child component has children
    return (
        <div>
            <h1>Parent Three Child Demo</h1>
            <button onClick={() => setCount((c) => c + 1)}>
                Count - {count}
            </button>
            <button onClick={() => setName('Sekar')}>
                Change Name - {name}
            </button>
            {/* <MemoizedChildThree name={name}>
                <strong>Hello Text</strong>
            </MemoizedChildThree> */}
            <MemoizedChildFour name={name} />
        </div>
    )
}