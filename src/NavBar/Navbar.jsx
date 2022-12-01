import React, { useState } from "react";
import "./Navbar.css";
import lotus from '../images/LogoNav.png'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      
      <a href="/"><img  className="nav-logo"  src={lotus} alt=""/></a>
      <ul className={`nav-items ${isOpen && "open"}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/" >Acomodações</a>
          <ul  >
          <li><a href="#">Aruna Casa Pirâmide</a></li>
          <li> <a href="/beija-flor">Casa Refúgio Beija-Flor</a></li>
          </ul>
          </li>
          <li><a href="/contato">Contato</a></li>
        
      </ul>
      <div className="topLeft">
        
        <a href="https://www.instagram.com/arunaespacoregenerativo" target="_blank" rel="noreferrer" ><i className="topIcon fa-brands fa-instagram"></i></a>
        <a href="https://linktr.ee/arunafloripa" target="_blank" rel="noreferrer" ><i className="topIcon fa-brands fa-airbnb"></i></a>
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
