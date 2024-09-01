import React from 'react';
import './follow.css';
import bgImg from '../../assets/bgImg.svg'
import patternsocial from '../../assets/patternsocial.svg'
import behance from '../../assets/behance.png'
import instagram from '../../assets/instagram.png'
import iinstagram from '../../assets/iinstagram.svg'
import Dribble from '../../assets/Dribble.svg'
import Behance from '../../assets/Behance.svg'
import Linkedin from '../../assets/Linkedin.svg'
import X from '../../assets/X.svg'
import scbg from '../../assets/scbg.svg'

const Follow = () => {
  return (
    <div className="follow-container">
    <div className="background-image">
      {/* <img className='social-pattern' data-aos='slide-right' src={patternsocial} alt="Pattern" /> */}
      <div className="rectangle-container">
        <div className="rect1" data-aos='slide-up'></div>
        <div className="rect2" data-aos='slide-down'></div>
        <div className="rect3" data-aos='slide-up'></div>
      </div>
      <img className='main-bg' data-aos='slide-up' src={bgImg} alt="Background" />
      <img className='scgb' data-aos='fade-left' src={scbg} alt="Graphic Background" />
      <div className="social-cards-container" data-aos='slide-left'>
        <div className="social-card" >
          <img className='profile-image' src={behance} alt="Behance Profile" />
          <img className='logo-image' src={Behance} alt="Behance Logo" />
          <div className="social-text">
            <h3>Behance Profile | kislaychauhan</h3>
            <p>Check out my design projects on Behance.</p>
          </div>
          <a href="https://www.behance.net/kislaychauhan" target="_blank" rel="noopener noreferrer">
            <button className="cta-btn behance-btn">Visit Now</button>
          </a>
        </div>
        <div className="social-card">
          <img className='profile-image' src={behance} alt="Dribbble Profile" />
          <img className='logo-image' src={Dribble} alt="Dribbble Logo" />
          <div className="social-text">
            <h3>Dribbble Profile | kislay_chahuan</h3>
            <p>Explore my creative works on Dribbble.</p>
          </div>
          <a href="https://dribbble.com/kislay_chauhan" target="_blank" rel="noopener noreferrer">
            <button className="cta-btn dribbble-btn">Visit Now</button>
          </a>
        </div>
        <div className="social-card">
          <img className='profile-image' src={instagram} alt="Instagram Profile" />
          <img className='logo-image' src={iinstagram} alt="Instagram Logo" />
          <div className="social-text">
            <h3>Instagram Profile | kislay_chauhan</h3>
            <p>Follow my visual journey on Instagram.</p>
          </div>
          <a href="https://www.instagram.com/kislay_chauhan/" target="_blank" rel="noopener noreferrer">
            <button className="cta-btn instagram-btn">Follow</button>
          </a>
        </div>
        <div className="social-card">
          <img className='profile-image' src={instagram} alt="LinkedIn Profile" />
          <img className='logo-image' src={Linkedin} alt="LinkedIn Logo" />
          <div className="social-text">
            <h3>LinkedIn Profile | Kislay Chauhan</h3>
            <p>Connect with me on LinkedIn for professional updates.</p>
          </div>
          <a href="https://www.linkedin.com/in/kislay-chauhan-5641941b8/" target="_blank" rel="noopener noreferrer">
            <button className="cta-btn linkedin-btn">Follow</button>
          </a>
        </div>
        <div className="social-card">
          <img className='profile-image' src={instagram} alt="LinkedIn Profile" />
          <img className='logo-image' src={X} alt="LinkedIn Logo" />
          <div className="social-text">
            <h3>X Profile | kislaychauhan15</h3>
            <p>Follow me on X to stay updated with my latest thoughts and insights.</p>
          </div>
          <a href="https://x.com/kislaychauhan15" target="_blank" rel="noopener noreferrer">
            <button className="cta-btn x-btn">Follow</button>
          </a>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Follow;
