import React from 'react';
import logoSvg from '../../assets/svg/storen.svg'; // Asegúrate de ajustar la ruta si es necesario

const Home = () => {
    return (
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
    );
};

export default Home;
