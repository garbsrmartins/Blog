import React, { useState } from "react";
import "./Navbar.css";
import lotus from '../images/Lotus.png'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <a href="/"><img  className="nav-logo"  src={lotus} alt=""/></a>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/">Home</a>
        <a href="/espaco">O espaço</a>
        <a href="/reserva">Reservas</a>
        <a href="/contato">Contato</a>
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