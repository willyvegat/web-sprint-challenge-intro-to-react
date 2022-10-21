import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Character from "./components/Character";
import styled from "styled-components";

const StyledHeader = styled.h1`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
  font-size: 5rem;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [characters, setCharacters] = useState([]);


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
      .then(res => {
        setCharacters(res.data);
      }).catch(err => console.error(err));
  }, [])

  return (
    <div className="App">
      <StyledHeader className="Header">REACT WARS</StyledHeader>
      <Character characters={characters} />
    </div>
  );
}

export default App;
