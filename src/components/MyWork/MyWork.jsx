import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg';
import { Link } from "react-router-dom";

const MyWork = () => {
  return (
    
      <div id='mywork' className="mywork">
        <div className="mywork-title" data-aos='fade-in'>
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container" >
        {mywork_data.map((work, index) => {
            return <div data-aos='flip-right'
            dangerouslySetInnerHTML={{ __html: work.w_embed }}
          ></div>
        })}
        </div>
        <div className="mywork-showmore">
        {/* <a className='show-more' href='#Work' onClick={(e) => handleClick(e, '#Work')}><p>Show more</p></a> */}
        <Link to="/Work" className='Show'><p>Show More</p></Link>
            <img className='arrow_icon' src={arrow_icon} alt="arrow icon" />
               
        </div>
      </div>
    
  )
}

export default MyWork
