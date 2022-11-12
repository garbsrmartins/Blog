import React, { useState } from "react";
import "./Navbar.css";
import lotus from '../images/LogoLotus.png'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      
      <a href="/"><img  className="nav-logo"  src={lotus} alt=""/></a>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/">Home</a>
        
      </div>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-airbnb"></i>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
