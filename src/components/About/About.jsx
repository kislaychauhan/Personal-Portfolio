import React from 'react'
import './About.css'
import Tool from '../../assets/Tool.svg'
import { Link } from "react-router-dom";
import arrow_icon from '../../assets/arrow_icon.svg';
import about1 from '../../assets/about1.svg';
import about2 from '../../assets/about2.svg';

const About = () => {


  return (
    <div id='about' className='about' data-aos='fade-up'>
      <h1>About Me</h1>
      <img class="img1" src={about1} alt="Photo" data-aos='slide-right'/>
      <img class="imag2" src={about2} alt="Photo" data-aos='slide-right'/>
      
        <h2 data-aos='slide-left'>As a third-year student at GLA University in Mathura, I specialize in
            UI/UX design. My passion lies in translating concepts into engaging
            user experiences. I'm dedicated to crafting interfaces that resonate
            with users and convey compelling narratives. Letts collaborate to
            actualize your vision into immersive digital experiences.</h2>
            <div className="skill-heading"data-aos='slide-left'><img src={Tool} alt="" /><p>Tools Proficiency</p></div>
            <div className="about-skill" data-aos='slide-left' >
            <div className="about-skills"><p>Figma</p><hr style={{width:"75%"}}/></div>
            <div className="about-skills"><p>Adobe Photoshop</p><hr style={{width:"65%"}}/></div>
            <div className="about-skills"><p>Adobe Illustrator</p><hr style={{width:"50%"}}/></div>
            <div className="about-skills"><p>HTML</p><hr style={{width:"70%"}}/></div>
            <div className="about-skills"><p>CSS</p><hr style={{width:"75%"}}/></div>
            <div className="about-skills"><p>Javascript</p><hr style={{width:"50%"}}/></div>
            <div className="about-skills"><p>Adobe Premiere Pro</p><hr style={{width:"70%"}}/></div>
            <div className="about-skills"><p>Adobe After Effects</p><hr style={{width:"50%"}}/></div>
            </div>
            <div className="see">
            <Link to="/About" className='see-more'><p>See More</p></Link>
            <img className='arrow_icon' src={arrow_icon} alt="arrow icon"/>
            </div>           
    </div>
  )
}

export default About
