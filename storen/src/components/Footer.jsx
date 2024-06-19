import React from 'react'
import logoSvg from '../assets/imgs/StorenLogo.png';
import "../styles/footer.css"

export const Footer = () => {
  return (
    <footer>
      <div className="footer-adjuster">
        <img className='storenLogo' src="/src/assets/svg/storen.svg" alt="LogoStoren" />
        <h2>RESISTENCIA Y ESTILO</h2>
        <div className="socialMedia-container"></div>
      </div>
    </footer>
  )
}
