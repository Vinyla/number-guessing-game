import React from 'react';
import Form from './Form';
import Header from './Header';

const Game = () => {
 return (
   <div>
     <Header />
     <div className='container'>
       <div className='game'>
         <div className='game-header'>
           <h3>Number Guessing Game</h3>
           <p>Select a random number between 1 and 100.</p>
           <p>Can you guess it in 10 turns?</p>
         </div>
         <div className='game-body'>
           <Form />
         </div>
       </div>
     </div>
   </div>
 );
}

export default Game;