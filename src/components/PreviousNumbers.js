import React from 'react';

const PreviousNumbers = ({ guesses }) => {
  return (
    <div className='previous-number'>
      {guesses.map((number, index) => (
        <div className='guesses' key={index}>
          {number}
        </div>
      ))}
    </div>
  );
};

export default PreviousNumbers;
 