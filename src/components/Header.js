import React from 'react';
import logo from '../assets/images/game.png';

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt='Logo' />
      <h2>Let's play a game</h2>
    </div>
  );
};

export default Header;
