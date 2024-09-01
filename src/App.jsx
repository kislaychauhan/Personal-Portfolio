import React, { useEffect } from 'react'; // <-- Add useEffect here if not already imported
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import MyWork from './components/MyWork/MyWork';
import Uiux from "./Pages/Work/Uiux/uiux";
import Gd from "./Pages/Work/GD/Gd";
import Video from "./Pages/Work/Video/video";
import Frontend from "./Pages/Work/Frontend/Frontend";
import Contact from './components/Contact/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Skills from './Pages/Moreabout/Skills/skills';
import Experience from './Pages/Moreabout/Experience/experience';
import Highlights from './Pages/Moreabout/Highlights/highlights';
import AOS from 'aos';
import 'aos/dist/aos.css'; // <-- Don't forget to import the CSS
import Follow from './Pages/Follow/follow';
import AboutNavbar from './Pages/Moreabout/about_navbar/AboutNavbar';
import Back from './components/Back/back';
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
      <Navbar />
        <Hero/>
        <About id="about" />
        
        <Services id="services" />
        <MyWork id="mywork" />
        <Contact id="contact" />
      </>
      
    ),
  },
  {
    path: '/work',
    element: (
      <>
      <Back/>
        <Uiux/>
        <Gd/>
        <Video/>
        <Frontend/>
      </>
    ),
  },
  {
    path: '/social',
    element: (
      <>
        <Back/>
        <Follow/>
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <Back/>
        <Skills/>
        <Experience/>
        <Highlights/>
      </>
    ),
  },
]);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div>
      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
