import { useCallback, useMemo, useState } from "react"
import { MemoizedChildFive } from "./ChildFive";



export const ParentFour = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Adi');
    console.log('Parent Four render');

    const person = {
        fname: 'Bruce',
        lname: 'Wayne'
    }

    const memoizedPerson = useMemo(() => person, []);

    const handleClick = () => { }

    const memoizedHandleClick = useCallback(handleClick, []);

    // props.children is a new reference, React memo will not work, if child component has children
    return (
        <div>
            <h1>Parent Four Child Demo</h1>
            <button onClick={() => setCount((c) => c + 1)}>
                Count - {count}
            </button>
            <button onClick={() => setName('Sekar')}>
                Change Name - {name}
            </button>
            {/* Fires if person obj and handleClick is changed, it is changed if parent rerenders, new version is created */}
            {/* <MemoizedChildFive name={name} person={person} handleClick={handleClick} /> */}

            {/* <MemoizedChildFive name={name} person={memoizedPerson} /> */}
            <MemoizedChildFive name={name} handleClick={memoizedHandleClick} />
        </div>
    )
}