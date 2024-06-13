import React from 'react';
import logoSvg from '../../assets/svg/storen.svg'; // Asegúrate de ajustar la ruta si es necesario
import GlassesType from './GlassesType';
import sunglasses from '../../assets/imgs/Types/sunglasses.png';
import optical from '../../assets/imgs/Types/optical.png';

const Home = () => {

    const glassesTypes = [
        {
            firtLetterTitle: "S",
            RestTitle: 'UNGLASSES',
            image: sunglasses,
            imgDescription: 'Sunglasses',
            link: '/catalog'
        },
        {
            firtLetterTitle: "O",
            RestTitle: 'PTICAL',
            image: optical,
            imgDescription: 'Optical',
            link: '/catalog'
        }
    ];



    return (
        <main>
            <div className="general-home-body">
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
                <div className="main-rest">
                    <div className="glassesType-container">
                        <div className="glassesType-link-adjuster">
                            {glassesTypes.map((type, index) => (
                                <GlassesType key={index} type={type} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
