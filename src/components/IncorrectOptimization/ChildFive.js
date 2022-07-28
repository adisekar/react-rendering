import { memo } from "react";

export const ChildFive = ({ name, person }) => {
    console.log('Child Five render');
    return (
        <div>
            Hello {name}.
            {person && person.fname + person.lname}
        </div>
    )
};

export const MemoizedChildFive = memo(ChildFive);