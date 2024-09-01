import React from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  return (
    <div id='services' className="services" >
        <div className="services-title" data-aos='fade-up'>
            <h1>My Services</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="services-container" >
        {Services_data.map((service, index) => {
            return (
              <div key={index} className="services-format" data-aos='flip-right'>
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className="projects">
                <h4>{service.s_work}</h4>
                <h5>{service.s_num}</h5>
                </div>
                {/* <div className="services-readmore">
                  <p>Read More</p>
                  <img className='arrow_icon' src={arrow_icon} alt="arrow icon" />
                </div> */}
             </div>
            );
        })}
        </div>
    </div>
  );
};

export default Services;
