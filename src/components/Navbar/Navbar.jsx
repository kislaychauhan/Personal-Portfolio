import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import plusIcon from "../../assets/plus_icon.svg";
import Plus from "../../assets/Plus.svg";

const Navbar = ({ menu, handleMenuClick, underline }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < navbarHeight);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    handleMenuClick(targetId.substring(1));
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className={`navbar-container ${visible ? "visible" : "hidden"}`}>
      <div className="navbar">
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {["home", "about", "services", "resume", "contact"].map((item) => (
            <li key={item}>
              {item === "resume" ? (
                <a
                  className="anchor-link"
                  href="/resume.pdf"
                  download="Resume.doc"
                >
                  <p>Resume</p>
                </a>
              ) : (
                <a
                  className="anchor-link"
                  href={`#${item}`}
                  onClick={(e) => handleClick(e, `#${item}`)}
                >
                  <p>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
                </a>
              )}
              {menu === item && <img src={underline} alt="" />}
            </li>
          ))}
        </ul>
        <Link to="/social" className="nav-connect">
          <img className="follow_icon" src={plusIcon} alt="Follow Icon" />
          <img className="follow_white" src={Plus} alt="Plus Icon" />
          <h1 className="glow-button">Follow</h1>
        </Link>
      </div>
      {/* Mobile Menu */}  
      <ul className={`nav-menu-mobile ${menuOpen ? "active" : ""}`}>
        {["home", "about", "services", "resume", "contact"].map((item) => (
          <li key={item}>
            {item === "resume" ? (
              <a
                className="anchor-link"
                href="/resume.pdf"
                download="Resume.doc"
              >
                <p>Resume</p>
              </a>
            ) : (
              <a
                className="anchor-link"
                href={`#${item}`}
                onClick={(e) => handleClick(e, `#${item}`)}
              >
                <p>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
              </a>
            )}
            {menu === item && <img src={underline} alt="" />}
          </li>
        ))}
        <li>
          <Link to="/social" className="anchor-link">
            Follow
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
