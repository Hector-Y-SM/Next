'use client'
import '../css/Header.css';
import '../css/Page.css';
import React, { useState } from 'react';
import Link from 'next/link';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const closeMenu = () => {
      setIsOpen(false);
    };
  
    return (
      <header className='header-main'>
        <div className="menu-container">
          <button onClick={toggleMenu} className="menu-button">☰</button>
          <button className='menu-home' onClick={closeMenu}> 
            <Link href={'/home'}>
                <span role="img" aria-label="Inicio" className="menu-icon">🏠</span> Inicio
            </Link>
          </button>
          <div className={`menu ${isOpen ? 'open' : ''}`}>
            <div className="menu-header">
              <h1 className='h1_solo'>
                Opciones disponibles
              </h1>
              <button onClick={closeMenu} className="close-button-left">✕</button>
            </div>
            <ul className="menu-list">
              <><h1>📌Alfabeto Universal</h1></>
              <li>
                <Link href={'/ejercicios/ejercicio01'} >IDENTIFICADORES</Link>
              </li>
              <> <h1>📌 Alfabeto: 'a , b'</h1> </>
              <li> 
                <Link href={'/ejercicios/ejercicio02'}>IGUAL</Link>
              </li>
              <li>
                <Link href={'/ejercicios/ejercicio03'}>DIFERENTE</Link>
              </li>
              <li>
                <Link href={'/ejercicios/ejercicio04'}>AABB</Link>
              </li>
              <li>
                <Link href={'/ejercicios/ejercicio05'}>B</Link>
              </li>
              <> <h1>📌Alfabeto: '0 , 1'</h1> </>
              <li>
                <Link href={'/ejercicios/ejercicio06'}>TERINAR EN 0</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;