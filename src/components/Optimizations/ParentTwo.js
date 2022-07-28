import { useCallback, useState } from "react"
import { ChildTwo, MemoizedChildTwo } from "./ChildTwo";

export const ParentTwo = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Adi');
    console.log('Parent Two render');

    // State or dynamic item should not be used inside callback, or dependency should be added
    const getAge = useCallback(() => {
        return count + 10;
    }, [count]);

    // passing as children, will not trigger rerender for children, and only for parent
    // React does this optimization automatically as props will not change, so child will not change
    return (
        <div>
            <h1>Parent Two Child Demo</h1>
            <button onClick={() => setCount((c) => c + 1)}>
                Count - {count}
            </button>
            <button onClick={() => setName('Sekar')}>
                Change Name - {name}
            </button>
            <ChildTwo name={name} />
            <MemoizedChildTwo getAge={getAge} />
        </div>
    )
}