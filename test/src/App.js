import React from 'react';
import { useState } from 'react';
import './styles.scss';
import MyComponent from './components/MyComponent';
import Title from './components/Title';
import Food from './components/Food';
import Wrapper from './components/Wrapper';
import Alert from './components/Alert';

const food = ['Pizza', 'Hamburger', 'Coke'];
const newList = ['nisser','BFASF']

const App = () => {
  // ------ Just button "Clicked" ----------
  const btnStuff = () => {
    console.log('Clicked');
  };

  const [name, setName] = useState('');
  const [inputFromChild, setInputFromChild] = useState('');

  const handleChange = (e) => {
    // oppdaterer verdien 'name' med det vi har skrevet i inputfeltet
    setName(e.target.value);
    setInputFromChild(e.target.value);
  };

  return (
    <>
      {/* ---- La en wrapper rundt hver oppgave for å skille dem ut.---- */}
      <Wrapper>
        <h1>The magic happens here</h1>
      </Wrapper>
      {/* ------- MyComponent ---------- */}
      <Wrapper>{<MyComponent title={'My first component'} />}</Wrapper>
      {/*--------- Titles.js ---------- */}
      <Wrapper>{Title('It Works')}</Wrapper>
      {/* ------ List test -----------------*/}
      <Wrapper>
        <ul>
          {food.map((foodOrDrinks) => (
            <li key={foodOrDrinks}>{foodOrDrinks}</li>
          ))}
        </ul>
      </Wrapper>
      {/* ------------ Food.js component ---------- */}
      <Wrapper>{Food(food)}
      {Food(newList)}
      </Wrapper>
      {/* ----------- Button Seperat ---------- */}
      <Wrapper>
        <button type="button" onClick={btnStuff}>
          En Knapp
        </button>
      </Wrapper>
      {/* ---------- INPUT Seperat -------- */}
      <Wrapper>
        <input
          type="text"
          placeholder="Fyll inn noe her"
          onChange={handleChange}
          value={name}
        ></input>
        <h3>Live input fra input over: {name}</h3>
      </Wrapper>
      {/* -------- Alert.js ------------- */}
      <Wrapper>
        <h3>LiftState Knappen virker ikke til denne</h3>
        {<Alert />}
      </Wrapper>
      {/* -------- Callback (lift state) --------------*/}
      <Wrapper>
        <Alert setInputFromChild={setInputFromChild} />
        <p>{inputFromChild}</p>
      </Wrapper>
    </>
  );
};

export default App;
