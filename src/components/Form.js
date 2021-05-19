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
  const [attempt, setAttempt] = useState(10);
  const [alert, setAlert] = useState('');

  const changeHandler = (e) => {
    setNumber(e.target.value);
  };

  const submitNumber = (e) => {
    e.preventDefault();
    if (parseInt(number, 10) === random) setAlert('Congrats!');
    else if (guesses.length === 9) setAlert('Game Over!')
    else if(parseInt(number, 10) < random) setAlert('Try higher!');
    else setAlert('Try lower');
    setAttempt(attempt - 1);
    setGuesses([...guesses, number]);
    setNumber('');
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
    setAttempt(10);
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
            <div className='over'>{alert}</div>
          </div>
          {alert === 'Congrats!' && (
            <button onClick={newGame}>Start new Game</button>
          )}
          {alert === 'Game Over!' && (
            <button onClick={newGame}>Start new Game</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
