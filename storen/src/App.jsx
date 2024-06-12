import React from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'
import logoSvg from './assets/svg/storen.svg'
import './styles/main.css'

const App = () => {
    return (
        <>
            <Header />
            <main>
                <div className="banner-container">
                    <div className="banner-adjuster">
                        <img className='bannerImg' src="/src/assets/imgs/StorenBanner.png" alt="storenBanner" />
                        <div className="text_logo-adjuster">
                            <img className='storenLogo' src={logoSvg} alt="LogoStoren" />
                            <h2>RESISTENCIA Y ESTILO</h2>
                        </div>
                        <div className="triangle-down" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}></div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default App;
