import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import uiux_data from '../../../assets/mywork_data';
import './uiux.css';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Uiux = () => {
  console.log('uiux data:', uiux_data);

  return (
    <div className="uiux-container">
      
      <div className="uiux">
        <div className="head" data-aos='fade-up'>
          <h1>UI/UX Projects</h1>
        </div>
        <div className="slider2">
          <Carousel responsive={responsive}>
            {uiux_data.map((work, index) => (
              <div key={index} className="image-container" data-aos='flip-left'>
                <div
            dangerouslySetInnerHTML={{ __html: work.w_embed }}
          ></div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Uiux;
