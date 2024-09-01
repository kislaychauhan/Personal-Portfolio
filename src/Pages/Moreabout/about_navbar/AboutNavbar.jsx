import React from 'react';
import { Link } from 'react-router-dom';
import './AboutNavbar.css';
import plus_icon from '../../../assets/plus_icon.svg';
import Plus from '../../../assets/Plus.svg';

const AboutNavbar = () => {
  return (
    <div className='about-navbar-container'>
      <div className='about-navbar'>
        <ul className="about-nav-menu">
          {/* Assuming your home page is at the root path ("/") */}
          <li><Link to={{ pathname: '/', hash: '#home' }}><p>Home</p></Link></li>
          <li><Link to={{ pathname: '/', hash: '#about' }}><p>About</p></Link></li>
          <li><Link to={{ pathname: '/', hash: '#services' }}><p>Services</p></Link></li>
          <li><Link to={{ pathname: '/', hash: '#resume' }}><p>Resume</p></Link></li>
          <li><Link to={{ pathname: '/', hash: '#contact' }}><p>Contact</p></Link></li>
        </ul>
        <div className="about-nav-connect">
          <img className='about-follow-icon' src={plus_icon} alt="" />
          <img className='about-follow-white' src={Plus} alt="" />
          <h1 className='about-follow-text'>Follow</h1>
        </div>
      </div>
    </div>
  );
}

export default AboutNavbar;
