import React from 'react';
import './back.css';
import { Link } from 'react-router-dom';
import backimg from '../../assets/backimg.svg';

const back = () => {
  return (
    <div className="back-container">
      
      <Link to={{ pathname: '/', hash: '#home' }}>
      
      <img src={backimg} alt="" />
      {/* <p>Back</p> */}
      
      </Link>
      <Link to={{ pathname: '/', hash: '#home' }}>
      
      
       <p>Back</p> 
      
      </Link>
      </div>
  
   
  )
}

export default back
