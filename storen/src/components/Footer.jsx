import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/footer.css"
import facebook from '../assets/svg/socialMediaSVG/facebook.svg'
import instagram from '../assets/svg/socialMediaSVG/instagram.svg'

export const Footer = () => {
  return (
    <footer>
      <div className="footer-adjuster">
        <img className='storenLogo' src="/src/assets/svg/storen.svg" alt="LogoStoren" />
        <h2>RESISTENCIA Y ESTILO</h2>
        <div className="socialMedia-container">
          <h4>Siguenos en</h4>
          <a href="">
            <div>
              <img className='socialMedia-img' src={facebook} alt="Facebook" />
            </div>
          </a>
          <a href="">
            <div>
              <img className='socialMedia-img' src={instagram} alt="Instagram" />
            </div>
          </a>
        </div>
        <ul className='new-ul'>
          <li><Link to="/contact">CONTACTO</Link></li>
          <li><Link to="/about-us">SOBRE NOSOTROS</Link></li>
        </ul>
        <div className="footer-absolute ">
          <div className="rigths-container">
            <h4>Storen®</h4>
            <h4>Storen Argentina®</h4>
          </div>
          <div className="to-developers">
            <h4>Desarrollado por Clock Gate Dev®</h4>
          </div>
        </div>
      </div>

    </footer>
  )
}
