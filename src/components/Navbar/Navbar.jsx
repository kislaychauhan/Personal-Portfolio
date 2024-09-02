import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import plus_icon from '../../assets/plus_icon.svg';
import Plus from '../../assets/Plus.svg';

const Navbar = ({ menu, handleMenuClick, underline }) => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const navbarHeight = document.querySelector('.navbar').offsetHeight;

            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < navbarHeight);
            setPrevScrollPos(currentScrollPos);

            const links = document.querySelectorAll('.anchor-link');
            links.forEach(link => {
                link.classList.remove('scrolling');
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    const handleClick = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const links = document.querySelectorAll('.anchor-link');
            links.forEach(link => {
                link.classList.add('scrolling');
            });
            targetElement.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                links.forEach(link => {
                    link.classList.remove('scrolling');
                });
            }, 500);
        }
        handleMenuClick(targetId.substring(1));
        setMenuOpen(false); // Close the menu on link click
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`navbar-container ${visible ? 'visible' : 'hidden'}`}>
            <div className='navbar'>
                <div className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <li>
                        <a className='anchor-link' href='#home' onClick={(e) => handleClick(e, '#home')}>
                            <p>Home</p>
                        </a>
                        {menu === "home" ? <img src={underline} alt='' /> : null}
                    </li>
                    <li>
                        <a className='anchor-link' href='#about' onClick={(e) => handleClick(e, '#about')}>
                            <p>About</p>
                        </a>
                        {menu === "about" ? <img src={underline} alt='' /> : null}
                    </li>
                    <li>
                        <a className='anchor-link' href='#services' onClick={(e) => handleClick(e, '#services')}>
                            <p>Services</p>
                        </a>
                        {menu === "services" ? <img src={underline} alt='' /> : null}
                    </li>
                    <li>
                        <a className='anchor-link' href='/resume.pdf' download="Resume.doc">
                            <p>Resume</p>
                        </a>
                        {menu === "resume" ? <img src={underline} alt='' /> : null}
                    </li>
                    <li>
                        <a className='anchor-link' href='#contact' onClick={(e) => handleClick(e, '#contact')}>
                            <p>Contact</p>
                        </a>
                        {menu === "contact" ? <img src={underline} alt='' /> : null}
                    </li>
                </ul>
                <Link to={{ pathname: '/social'}} className="nav-connect">
                    <img className='follow_icon' src={plus_icon} alt="" />
                    <img className='follow_white' src={Plus} alt="" />
                    <h1 className='Follow_text'>Follow</h1> 
                </Link>
            </div>

            {/* Mobile Menu */}
            <ul className={`nav-menu-mobile ${menuOpen ? 'active' : ''}`}>
                <li>
                    <a className='anchor-link' href='#home' onClick={(e) => handleClick(e, '#home')}>
                        <p>Home</p>
                    </a>
                    {menu === "home" ? <img src={underline} alt='' /> : null}
                </li>
                <li>
                    <a className='anchor-link' href='#about' onClick={(e) => handleClick(e, '#about')}>
                        <p>About</p>
                    </a>
                    {menu === "about" ? <img src={underline} alt='' /> : null}
                </li>
                <li>
                    <a className='anchor-link' href='#services' onClick={(e) => handleClick(e, '#services')}>
                        <p>Services</p>
                    </a>
                    {menu === "services" ? <img src={underline} alt='' /> : null}
                </li>
                <li>
                    <a className='anchor-link' href='/resume.pdf' download="Resume.doc">
                        <p>Resume</p>
                    </a>
                    {menu === "resume" ? <img src={underline} alt='' /> : null}
                </li>
                <li>
                    <a className='anchor-link' href='#contact' onClick={(e) => handleClick(e, '#contact')}>
                        <p>Contact</p>
                    </a>
                    {menu === "contact" ? <img src={underline} alt='' /> : null}
                </li>
                {/* Follow Button in Mobile Menu */}
                <li>
                    <Link to={{ pathname: '/social'}}>
                        <a className='anchor-link'>Follow</a> 
                        
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
