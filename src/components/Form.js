import React, { useState } from 'react';
import PreviousNumbers from './PreviousNumbers';

const Form = () => {
  const randomNumber = () => {
    const min = 10;
    const max = 100;
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const [number, setNumber] = useState('');
  const [random, setRandom] = useState(randomNumber());
  const [guesses, setGuesses] = useState([]);
  const [attempt, setAttempt] = useState([10]);
  const [alert, setAlert] = useState(false);

  const changeHandler = (e) => {
    setNumber(e.target.value);
  };

  const submitNumber = (e) => {
    e.preventDefault();
    if (attempt === 0 ) {
      setAlert(true);
      console.log('error');
      // ????
    } else {
      setNumber('');
      setAttempt([attempt - 1]);
      setGuesses([...guesses, number]);
      console.log(random);
      console.log(attempt);
      console.log(number);
    }
  };

  const clearInput = () => {
    setNumber('');
  };

  //moram srediti!
  const resetGame = () => {
    setNumber('');
    setRandom(randomNumber());
    setAttempt([10]);
    setGuesses([]);
  };

  const newGame = () => {
    setNumber('');
    setRandom(randomNumber());
    setAttempt([10]);
    setGuesses([]);
  };

  return (
    <div className='form'>
      <form onSubmit={submitNumber}>
        <div>
          <label htmlFor='label'>Enter a number:</label>
          <input
            className='input'
            type='number'
            value={number}
            onChange={changeHandler}
          />
        </div>
        <div>
          <button type='submit' disabled={!number || attempt <= 0}>
            Submit number
          </button>
          <button onClick={clearInput} disabled={!number || attempt <= 0}>
            Clear
          </button>
          <button onClick={resetGame}>Reset</button>
        </div>
        <div>
          <div className='attempt'>Remaining attempts: {attempt}</div>
          <PreviousNumbers guesses={guesses} />
          <div className='message'>
            {alert && <div className='over'>GAME OVER!</div>}
          </div>
          {attempt <= 0 && <button onClick={newGame}>Start new Game</button>}
        </div>
      </form>
    </div>
  );
};

export default Form;
