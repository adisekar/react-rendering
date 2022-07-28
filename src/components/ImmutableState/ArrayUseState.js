import React, { useState } from "react"

const initialState = ['Bruce', 'Wayne'];

export const ArrayUseState = () => {
    const [persons, setPersons] = useState(initialState);

    const handleClick = () => {
        // persons.push('Clark');
        // persons.push('kent');
        // setPersons(persons);

        const newPersons = [...persons];
        newPersons.push('Clark');
        newPersons.push('kent');
        setPersons(newPersons);
    }

    console.log('Array use state render');
    return (
        <div>
            <h1>Array Use State Demo</h1>
            {persons.map((person) => <div key={person}>{person}</div>)}
            <button onClick={() => handleClick()}>
                Add Persons
            </button>
        </div>
    )
}