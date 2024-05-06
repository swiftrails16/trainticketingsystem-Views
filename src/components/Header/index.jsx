import React from 'react';

import './index.css';
import { IMAGES } from '@/assets/imgs/Images';

const Header = () => {
 


  

  
  return (
    <nav className='nav-bar' >
      <div className='logo'>
        <img src={IMAGES.logo} alt='Swift Icon' className='image1' />
      </div>
      <div className='other-items'>
        <div >
          <a className='nav-link'>
            Home
          </a>
        </div>

        <a  className='nav-link'>
          About us
        </a>
        <a className='nav-link'>
          How it works
        </a>
        <a className='nav-link'>
           Payment Services
        </a>
        <a className='nav-link'>
          Contact
        </a>
        <button className='btn'>
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Header;
