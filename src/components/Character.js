import React from 'react';


// Write your Character component here




export default function Character(props) {
    return (
        <div>
            {props.characters.map((character, idx) => {
                // return <li>{character}</li>
                return <li key={idx}>{character.name}</li>
            })}
        </div>
    )
}