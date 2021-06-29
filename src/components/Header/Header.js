import React from 'react';
import logo from '../../images/logo.svg';

function Header({statisticsModal}) {
 
  return (
    <header className='header'>
      <img src={logo} className='header__logo' alt='Логотип' />
      <button className='btn' onClick={statisticsModal}>Cтатистика</button>
      <button className='btn'>Выйти</button>
    </header>
  );
}

export default Header;
