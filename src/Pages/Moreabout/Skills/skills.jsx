import React, { useEffect } from 'react';
import './skills.css';
import skillimg from "../../../assets/skillimg.svg";
import { Link } from "react-router-dom";

const Skills = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="container-heading" data-aos='slide-right'>
        <img src={skillimg} alt="skills" />
        <h1>Skills</h1>
      </div>
      <div className="skills-container" data-aos='zoom-in'>
        <div className="ui-ux">
          <div className="heading">UI/UX Design</div>
          <div className="skills"><p>Interactive Design</p><hr style={{width:'80%'}} /></div>
          <div className="skills"><p>Visual Design</p><hr style={{width:'85%'}} /></div>
          <div className="skills"><p>Wireframes</p><hr style={{width:'75%'}} /></div>
          <div className="skills"><p>Research</p><hr style={{width:'65%'}} /></div>
          <div className="skills"><p>Creative</p><hr style={{width:'80%'}} /></div>
        </div>
        <div className="development">
          <div className="heading">Website Development</div>
          <div className="skills"><p>HTML/CSS</p><hr style={{width:'85%'}} /></div>
          <div className="skills"><p>JavaScript</p><hr style={{width:'65%'}} /></div>
          <div className="skills"><p>Node JS</p><hr style={{width:'35%'}} /></div>
          <div className="skills"><p>Git/Github</p><hr style={{width:'25%'}} /></div>
          <div className="skills"><p>Responsive Design</p><hr style={{width:'75%'}} /></div>
        </div>
        <div className="graphic">
          <div className="heading">Graphic Designing</div>
          <div className="skills"><p>Adobe Photoshop/Illustrator</p><hr style={{width:'75%'}} /></div>
          <div className="skills"><p>Typography</p><hr style={{width:'85%'}} /></div>
          <div className="skills"><p>Color Theory</p><hr style={{width:'70%'}} /></div>
          <div className="skills"><p>Layout and Composition</p><hr style={{width:'85%'}} /></div>
          <div className="skills"><p>Branding</p><hr style={{width:'75%'}} /></div>
        </div>
        <div className="video-editing">
          <div className="heading">Video Editing</div>
          <div className="skills"><p>Adobe Premiere Pro/After Effects</p><hr style={{width:'80%'}} /></div>
          <div className="skills"><p>Storytelling</p><hr style={{width:'75%'}} /></div>
          <div className="skills"><p>Editing Techniques</p><hr style={{width:'75%'}} /></div>
          <div className="skills"><p>Motion Graphics</p><hr style={{width:'50%'}} /></div>
          <div className="skills"><p>Audio Editing</p><hr style={{width:'70%'}} /></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
