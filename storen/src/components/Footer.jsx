import React from 'react'
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
      </div>
      <div className="to-developers">

      </div>
    </footer>
  )
}
