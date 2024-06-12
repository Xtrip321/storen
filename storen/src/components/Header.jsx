import React, { useState } from 'react';
import '../styles/Header.css'; // Importa los estilos específicos para Header
import logoSvg from '../assets/svg/storen.svg'; // Importa el archivo SVG
import burgerSvg from '../assets/svg/burger.svg'; // Importa el archivo SVG
import closeSvg from '../assets/svg/cerrar.svg'; // Importa el archivo SVG

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
                    <li><a href="#inicio">INICIO</a></li>
                    <li><a href="#catalogo">CATÁLOGO</a></li>
                    <li><a href="#contacto">CONTACTO</a></li>
                    <li><a href="#sobre-nosotros">SOBRE NOSOTROS</a></li>
                    <li><a href="#sobre-nosotros">PRUEBA</a></li>
                </ul>
            </nav>
            <button className={`close-button ${isOpen ? 'close-button-open' : ''}`} onClick={toggleMenu}>
                <img src={closeSvg} alt="Menu" />
            </button>
            <div className={`menu-icon ${isOpen ? 'menu-icon-open' : ''}`} onClick={toggleMenu}>
                <span><img src={burgerSvg} alt="Menu" /></span>
            </div>
        </header>
    );
};

export default Header;
