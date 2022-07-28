import { memo } from "react";

export const ChildTwo = (props) => {
    console.log('Child Two render');

    return (
        <div>
            Child Two Component
        </div>
    )
}

// Memoized does shallow comparison for changed props.2nd argument is used for custom comparator.
// Memoized means child will renrender if any of props passed to it change

export const MemoizedChildTwo = memo(({ getAge }) => {
    console.log('Memoized Child Two render');

    return (
        <div>
            Memoized Child Two Component {getAge()}
        </div>
    )
});