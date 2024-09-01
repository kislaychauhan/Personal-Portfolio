import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './highlights.css';
import h1 from '../../../assets/h1.jpg';
import h2 from '../../../assets/h2.svg';
import h3 from '../../../assets/h3.svg';
import h4 from '../../../assets/h4.svg';
import h5 from '../../../assets/h5.svg';
import h6 from '../../../assets/h6.svg';
import h7 from '../../../assets/h7.svg';
import h8 from '../../../assets/h8.svg';
import h9 from '../../../assets/h9.svg';
import h10 from '../../../assets/h10.svg';
import h11 from '../../../assets/h11.svg';
import h12 from '../../../assets/h12.svg';
import h13 from '../../../assets/h13.svg';
import h14 from '../../../assets/h14.svg';


const CardSlider = () => {
  const highlights = [
    {
      photo: h1, // Imported image
      title: 'Volunteer of the Year',
      description: 'Awarded as the Best NSS Volunteer of the Year 2022 for the hardwork, team Management and Volunteering for the whole year.',
    },
    {
      photo: h2,
      title: 'Two First Prizes',
      description: 'Won the first prize in both Group Act and MonoAct inter-university Drama Competition in Spandan 2023. Also won the prize of Rs.15,000.',
    },
    // {
    //   photo: h3,
    //   title: 'Highlight 3',
    //   description: 'This is a short description of highlight 3. It provides a brief overview of the content.',
    // },
    {
      photo: h4,
      title: 'Head Organizer: Srijan23',
      description: 'Organized a two day Inter-School Compeition in GLA University in which around 3500 school students took part in 18 competitions from Educational to Cultural and Sports.',
    },
    {
      photo: h5,
      title: 'Head Organizer: Spandan24',
      description: 'Organized the biggest two day Cultural fest in the history of GLA University. Celebs like Stebin Ben, Rajat Sood, DJ LilBee, Nitin Kumar performed.',
    },
    {
      photo: h6,
      title: 'President: SAC',
      description: 'Awarded with the trophy by the Dean of Student welfare, GLA University for serving as the president of Student Affairs Council 2023-24.',
    },
    {
      photo: h7,
      title: 'Head Organizer: Dandiya Night 23',
      description: 'Organized the Cultural Dandiya Night in GLA University. Celebs like Eleena Chauhan, VJ Infinty performed. Around 2000 Students enjoyed in the fest.',
    },
    {
      photo: h8,
      title: 'First Prize: Hindustan Univ.',
      description: 'Won the first prize in Group Act in inter-university Drama Competition at IMS Ghaziabad.',
    },
    {
      photo: h9,
      title: 'First Prize at IMS Ghaziabad',
      description: 'Won the first prize in Group Act in inter-university Drama Competition at IMS Ghaziabad.',
    },
    {
      photo: h10,
      title: 'Best Business Idea Pitch',
      description: 'Won the first prize at the Innovation Day where Enterpreurship Cell, GLA University organized a Ideathon for the best idea pitching.',
    },
    {
      photo: h11,
      title: 'Top 30: Smart India Hackathon',
      description: 'We "Team Yalgaar" secured in top 30 teams out of 180 teams all over the univeristy in 28 hours long Smart India Hackathon 2023.',
    },
    {
      photo: h12,
      title: 'Head Organizer: GLA Got Talent',
      description: 'Organized the biggest Talent hunt competition in campus for freshers in 2023 to showcase their skills, talent and passion. Around 100 participants showed their moves.',
    },
    {
      photo: h13,
      title: 'Organized Freshers22',
      description: 'It was my first event as the organiser. Organized freshers party for around 2800 freshers of 2022 in GLA University. this event gave me lot of lessons and learnings.',
    },
    {
      photo: h14,
      title: 'Volunteered at Convocation22',
      description: 'Voulnteered in the convocation program for the passouts of 2022, We had the responsibilty to volunteer the VVIP area, GLA University hosted UP CM Yogi Adityanath.',
    },
    // Add more highlights as needed
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="card-slider">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={8000}
        keyBoardControl={true}
        showDots={true}
      >
        {highlights.map((highlight, index) => (
          <div className="card"  key={index} data-aos='flip-up'>
            <div className="card-photo-container" >
              <img src={highlight.photo} alt={highlight.title} className="card-photo" />
            </div>
            <h2 className="card-title">{highlight.title}</h2>
            <p className="card-description">{highlight.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CardSlider;
