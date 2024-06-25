import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logoSvg from '../assets/svg/storen.svg';
import burgerSvg from '../assets/svg/burger.svg';
import closeSvg from '../assets/svg/cerrar.svg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className="logo">
                <img src={logoSvg} alt="Logo" /> {/* Usa el SVG como fuente de una imagen */}
            </div>

            <nav className={`menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/">INICIO</Link></li>
                    <li><Link to="/catalog">CATÁLOGO</Link></li>
                    <li><Link to="/contact">CONTACTO</Link></li>
                    <li><Link to="/about-us">SOBRE NOSOTROS</Link></li>
                </ul>
            </nav>
            <button className={`close-button ${isOpen ? 'close-button-open' : ''}`} onClick={toggleMenu}>
                <img src={closeSvg} alt="Cerrar" />
            </button>
            <div className={`menu-icon ${isOpen ? 'menu-icon-open' : ''}`} onClick={toggleMenu}>
                <span><img src={burgerSvg} alt="Menú" /></span>
            </div>
        </header>
    );
};

export default Header;
