import React from 'react';
import logoSvg from '../../assets/svg/storen.svg'; // Asegúrate de ajustar la ruta si es necesario
import GlassesType from './GlassesType';
import sunglasses from '../../assets/imgs/Types/sunglasses.png';
import optical from '../../assets/imgs/Types/optical.png';
import storen1 from '../../assets/imgs/Types/storen1.png'
import storen2 from '../../assets/imgs/Types/storen2.png'
import storen3 from '../../assets/imgs/Types/storen3.png'
import GaleryText from './GaleryText';

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
                                <GlassesType
                                    key={index}
                                    type={type}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="galery-container">

                        <img
                            src={storen3}
                            alt="Lentes de sol en aventura"
                        />
                        <GaleryText
                            h3text="Adentrate a la (Aventura)"
                            ptext="Nuestros lentes de sol están construidos con materiales de (alta calidad) que resisten impactos, arañazos y condiciones climáticas adversas. Ofrecen (durabilidad) excepcional, (comodidad) y (estilo) en cada aventura."
                        />
                        <img
                            src={storen1}
                            alt="Lentes de sol en aventura"
                        />
                    </div>
                    <div className="galery-container">
                        <GaleryText
                            h3text="Descubre la (Versatilidad) en Estilo"
                            ptext="Desde el dinamismo (Urbano) hasta un evento (Formal), cada par es creado para quienes buscan un (Equilibrio) perfecto entre (Apariencia) y (Practicidad)."
                        />
                        <img
                            src={storen2}
                            alt="Lentes de sol en diversas situaciones"
                        />
                    </div>
                    <GaleryText
                        h3text="Descubre la (Versatilidad) en Estilo"
                        ptext="Desde el dinamismo (Urbano) hasta un evento (Formal), cada par es creado para quienes buscan un (Equilibrio) perfecto entre (Apariencia) y (Practicidad)."
                    />
                </div>
            </div>
        </main>
    );
};

export default Home;
