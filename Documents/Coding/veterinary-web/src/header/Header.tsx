import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className='header__container flex'>
      <div className='header__logo'>Veterinární klinika</div>
      <ul className='header__list flex'>
        <li className='header__list-item'>O nás</li>
        <li className='header__list-item'>Služby</li>
        <li className='header__list-item'>Ceník</li>
        <li className='header__list-item'>Kontakt</li>
      </ul>
      <button className='header__contact-button'>Napište nám!</button>
    </header>
  );
}

export default Header;
