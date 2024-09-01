import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import gd from '../../../assets/gd'; // Ensure this path is correct
import './Gd.css'; // Ensure this CSS file exists

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Gd = () => {
  console.log('gd data:', gd);

  return (
    <div className="uiux-container1">
      <div className="uiux1">
        <div className="head1" data-aos='fade-up'>
          <h1>Graphic Design Projects</h1>
        </div>
        <div className="slider1">
          <Carousel responsive={responsive}>
            {gd.map((work, index) => (
              <div key={index} className="image-containergd" data-aos='flip-left'>
                <img src={work.w_img} alt={work.w_name} />
                <h1>{work.w_name}</h1>
                <h2>{work.w_date}</h2>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Gd;
