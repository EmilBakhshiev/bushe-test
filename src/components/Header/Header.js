import React from 'react';
import logo from '../../images/logo.svg';

function Header({statisticsModal}) {
 
  return (
    <header className='header'>
      <img src={logo} className='header__logo' alt='Логотип'></img>
      <button className='header__btn' onClick={statisticsModal}>Cтатистика</button>
      <button className='header__btn'>Выйти</button>
    </header>
  );
}

export default Header;
