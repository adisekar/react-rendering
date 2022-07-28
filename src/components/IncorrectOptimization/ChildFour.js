import { memo } from "react";

// Time is not updated, as child component will only update if name changes
export const ChildFour = ({ name }) => {
    console.log('Child Four render');
    const date = new Date();
    return (
        <div>
            Hello {name}. It is currently {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
        </div>
    )
};

export const MemoizedChildFour = memo(ChildFour);