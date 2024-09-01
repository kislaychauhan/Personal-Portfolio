import React, { useEffect } from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.png';
import right_photo from '../../assets/right_photo.png';
import left_photo from '../../assets/left_photo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = ({ menu, handleMenuClick, underline }) => {
  

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        const links = document.querySelectorAll('.anchor-link1', '.anchor-link2', '.anchor-link3');
        links.forEach(link => {
            link.classList.add('scrolling');
        });
        targetElement.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            const links = document.querySelectorAll('.anchor-link1', '.anchor-link2', '.anchor-link3');
            links.forEach(link => {
                link.classList.remove('scrolling');
            });
        }, 500); // Duration should match the CSS transition duration
    }
    handleMenuClick(targetId.substring(1));
  };

  return (
    <div id='home' className='hero' data-aos='fade-up'> {/* <-- Add AOS attribute here */}
      <div className="hero-container" data-aos='fade-up'>
        <h2>Hey, I'm</h2>
        <h3>Kislay Chauhan</h3>
      </div>
      <img className="img1" src={profile_img} alt="Photo" data-aos='slide-up' />
      <h1 data-aos='flip-down'>UI/UX DESIGNER</h1>
      <h4 data-aos='fade-up'>FRONTEND DEVELOPER</h4>

      <img className="img2" src={right_photo} alt="Photo" data-aos='fade-left' />
      <img className="img3" src={left_photo} alt="Photo" data-aos='fade-right' />

      <div className='hero-action'>
        <div className="hero-connect">
          <a className='anchor-link1' href='#mywork' onClick={(e) => handleClick(e, '#mywork')} data-aos='fade-up'>My Work</a>
        </div>
        <div className="hero-resume">
          <a className='anchor-link2' href='#about' onClick={(e) => handleClick(e, '#about')} data-aos='fade-up'>About Me</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
