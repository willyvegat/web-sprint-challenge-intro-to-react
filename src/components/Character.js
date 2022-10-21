import React from 'react';


// Write your Character component here




export default function Character(props) {
    return (
        <div>
            {props.characters.map((character, idx) => {
                return <div key={idx}>{character.name} {character.birth_year}</div>
            })}
        </div>
    )
}