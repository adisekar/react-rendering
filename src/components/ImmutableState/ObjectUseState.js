import React, { useState } from "react"

const initialState = {
    fname: 'Bruce',
    lname: 'Wayne'
};

export const ObjectUseState = () => {
    const [person, setPerson] = useState(initialState);

    const changeName = () => {
        // person.fname = 'Clark';
        // person.lname = 'Kent';
        // setPerson(person);

        const newPerson = { ...person };
        newPerson.fname = 'Clark';
        newPerson.lname = 'Kent';
        setPerson(newPerson);
    }

    console.log('Object use state render');

    return (
        <div>
            <h1>Object Use State Demo</h1>
            {person.fname} - {person.lname}
            <button onClick={() => changeName()}>
                Change Name
            </button>
        </div>
    )
}