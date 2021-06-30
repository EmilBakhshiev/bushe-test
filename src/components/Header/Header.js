import React from 'react';
import logo from '../../images/logo.svg';

function Header({statisticsModal}) {
 
  return (
    <header className='header'>
      <img src={logo} className='header__logo' alt='Логотип' />
      <div className='header__nav_wrapper'>
      <button className='btn btn_place_header' onClick={statisticsModal}>Cтатистика</button>
      <button className='btn'>Выйти</button>
      </div>
      
    </header>
  );
}

export default Header;
