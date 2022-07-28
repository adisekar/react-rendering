import { memo } from "react";

export const ChildThree = ({ children }) => {
    console.log('Memoized Child Three render');

    return (
        <div>
            Memoized Child Three Component
            {children}
        </div>
    )
};

export const MemoizedChildThree = memo(ChildThree);