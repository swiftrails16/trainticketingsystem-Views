import React from 'react';
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate,useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import './index.css';
import { IMAGES } from '@/assets/imgs/Images';

const Header = () => {
  const location = useLocation();
  
  const [scrollCount, setScrollCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollCount(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    
  }, [location.pathname]);


  const navigate = useNavigate();

  const logging = () => {
    navigate('/Login');
  };

  const scrhome = (homescroll) => {
    scroller.scrollTo(homescroll, {
      duration: 1000,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <nav className='nav-bar' style={{ background: scrollCount > 0 ? 'white' : 'transparent' }}>
      <div className='logo'>
        <img src={IMAGES.logo} alt='Swift Icon' className='image1' />
      </div>
      <div className='other-items'>
        <div onClick={() => scrhome('homescroll')}>
          <Link className='nav-link' to='/'>
            Home
          </Link>
        </div>

        <Link className='nav-link' to='/'>
          About us
        </Link>
        <Link className='nav-link' to='/'>
          How it works
        </Link>
        <Link className='nav-link' to='/Transaction'>
          Services
        </Link>
        <Link className='nav-link' to='/'>
          Contact
        </Link>
        <button className='btn' onClick={logging}>
          Login
        </button>
      </div>
    </nav>
  );
};

export default Header;
