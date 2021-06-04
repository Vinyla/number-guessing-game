import React, { useState } from 'react';
import Attempt from './Attempt';
import PreviousNumbers from './PreviousNumbers';

const Game = () => {
  const randomNumber = () => {
    const min = 10;
    const max = 100;
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const [number, setNumber] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [attempt, setAttempt] = useState(10);
  const [random, setRandom] = useState(randomNumber());
  const [alert, setAlert] = useState('');

  const changeHandler = (e) => {
    setNumber(e.target.value);
  };

  const submitNumber = (e) => {
    e.preventDefault();
    if (parseInt(number, 10) === random) setAlert('Congratulations!');
    else if (guesses.length === 9) setAlert('Game Over!');
    else if (parseInt(number, 10) < random) setAlert('Number too low!');
    else setAlert('Number too high!');
    setNumber('');
    setAttempt(attempt - 1);
    setGuesses([...guesses, number]);
  };

  const clearInput = () => {
    setNumber('');
  };

  const resetGame = () => {
    setNumber('');
    setRandom(randomNumber(random));
    setAttempt(10);
    setAlert('');
    setGuesses([]);
  };

  return (
    <div>
      <div className='container'>
        <div className='game'>
          <div className='game-header'>
            <h3>Number Guessing Game</h3>
            <p>Select a random number between 1 and 100.</p>
            <p>Can you guess it in 10 turns?</p>
          </div>
          <div className='game-body'>
            <div className='form'>
              <form>
                <div>
                  <label htmlFor='label'>Enter a number:</label>
                  <input
                    className='input'
                    type='number'
                    value={number}
                    onChange={changeHandler}
                    disabled={attempt <= 0}
                  />
                </div>
                {(number < 0 || number > 100 || parseInt(number, 10) === 0) && (
                  <div className='minMax'>min. 1 - max. 100</div>
                )}
                <div>
                  <button
                    type='submit'
                    onClick={submitNumber}
                    disabled={
                      !number || attempt <= 0 || number < 0 || number > 100
                    }
                  >
                    Submit number
                  </button>
                  <button
                    onClick={clearInput}
                    disabled={!number || attempt <= 0}
                  >
                    Clear
                  </button>
                  <button onClick={resetGame} disabled={attempt <= 0}>
                    Reset
                  </button>
                </div>
              </form>
              <Attempt attempt={attempt} />
              <PreviousNumbers guesses={guesses} />
              {alert === 'Congratulations!' && (
                <div className='right'>{alert}</div>
              )}
              {alert === 'Congratulations!' && (
                <button onClick={resetGame}>Start new Game</button>
              )}
              {alert === 'Game Over!' && <div className='over'>{alert}</div>}
              {alert === 'Game Over!' && (
                <button onClick={resetGame}>Start new Game</button>
              )}
              {alert === 'Number too low!' && (
                <div className='low'>{alert}</div>
              )}
              {alert === 'Number too high!' && (
                <div className='high'>{alert}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
