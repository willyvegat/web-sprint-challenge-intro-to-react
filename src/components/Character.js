import React from 'react';
import styled from 'styled-components';


// Write your Character component here

const StyledCharacter = styled.div`
    font-size: 3rem;
    border: 2px solid black;
    margin: 0rem 15rem;
    margin-bottom: 1rem;
    overflow-x:hidden;
    displaay: flex;
    align-content: space-between; 
    color: white;
`



export default function Character(props) {
    return (
        <div>
            {props.characters.map((character, idx) => {
                return <StyledCharacter key={idx}>{character.name} {character.birth_year}</StyledCharacter>
            })}
        </div>
    )
}