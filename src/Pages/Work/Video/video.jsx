import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import video from '../../../assets/video.js'; // Ensure this path is correct
import './video.css'; // Ensure this CSS file exists

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Video = () => {
  console.log('video data:', video);

  return (
    <div className="uiux-container3">
      <div className="uiux3">
        <div className="head3" data-aos='fade-up'>
          <h1>Video Projects</h1>
        </div>
        <div className="slider3">
          <Carousel responsive={responsive}>
            {video.map((work, index) => (
              // <div key={index} className="video-container3" data-aos='flip-left'>
              //   {work.isExternal ? (
              //     <div dangerouslySetInnerHTML={{ __html: work.w_img }}></div>
              //   ) : (
              //     <video controls>
              //       <source src={work.w_img} type="video/mp4" />
              //       Your browser does not support the video tag.
              //     </video>
              //   )}
              //   
              //  </div>
              <>
              <h1>{work.w_name}</h1>
               <h2>{work.w_date}</h2>
              </>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Video;
