import React from 'react';
import logo from '../assets/Star_Wars_Logo.svg.png'; 

const Navbar = () => {
  return (
    <nav>
      <div className='menu'>
        <img src={logo} alt="Logo" height="30" />
        <ul>
          <lu><a href="/Inicio">Inicio</a></lu>
          <br></br>      
          <lu><a href="/contact">Contacto</a></lu>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;