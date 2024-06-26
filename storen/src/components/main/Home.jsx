import React from 'react';
import logoSvg from '../../assets/svg/storen.svg';
import prueba from '../../assets/imgs/Types/prueba2.jpg';
import GlassesType from './GlassesType';
import sunglasses from '../../assets/imgs/Types/sunglasses.png';
import optical2 from '../../assets/imgs/Types/optical2.jpeg';
import storen1 from '../../assets/imgs/Types/storen1.png'
import storen2 from '../../assets/imgs/Types/storen2.png'
import storen3 from '../../assets/imgs/Types/storen3.png'
import storen4 from '../../assets/imgs/Types/storen4.png'
import storen5 from '../../assets/imgs/Types/storen5.png'
import GaleryText from './GaleryText';
import { DirectBtn } from '../DirectBtn';

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
            RestTitle: 'PTICS',
            image: optical2,
            imgDescription: 'Optical',
            link: '/catalog'
        }
    ];


    return (
        <main>
            <div className="general-home-body">
                <div className="banner-container">
                    <div className="banner-adjuster">
                        <img className='bannerImg' src={prueba} alt="storen" />
                        <div className="text_logo-adjuster">
                            <img className='storenLogo' src={logoSvg} alt="LogoStoren" />
                            <h2>RESISTENCIA Y ESTILO</h2>
                            <DirectBtn
                                title="Descrubre nuestro Catalogo"
                                blinPath="/catalog"
                            />
                        </div>
                        <div className="triangle-down" onClick={() => window.scrollTo({ top: window.innerHeight - 70, behavior: 'smooth' })}></div>
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
                    <div className="galery-section">
                        <section className="section-index">
                            <div className="galery-container">
                                <div className="text-container">
                                    <GaleryText
                                        h3text="Adentrate a la (Aventura)"
                                        ptext="Nuestros lentes de sol están construidos con materiales de (alta calidad) que resisten impactos, arañazos y condiciones climáticas adversas. Ofrecen (durabilidad) excepcional, (comodidad) y (estilo) en cada aventura."
                                    />
                                    <DirectBtn
                                        title="Explorar"
                                        blinPath="/catalog"
                                    />
                                </div>
                                <div className="img-container">
                                    <img
                                        src={storen1}
                                        alt="Lentes de sol en aventura"
                                    />
                                </div>
                            </div>
                        </section>
                        <section className="section-index">
                            <div className="galery-container">
                                <div className="text-container">
                                    <GaleryText
                                        h3text="Descubre la (Versatilidad) en Estilo"
                                        ptext="Desde el dinamismo (Urbano) hasta un evento (Formal), cada par es creado para quienes buscan un (Equilibrio) perfecto entre (Apariencia) y (Practicidad)."
                                    />
                                    <DirectBtn
                                        title="Explorar"
                                        blinPath="/catalog"
                                    />
                                </div>
                                <div className="img-container">
                                    <img
                                        src={storen2}
                                        alt="Lentes de sol en diversas situaciones"
                                    />
                                </div>
                            </div>
                        </section>
                        <section className="section-index">
                            <div className="galery-container">
                                <div className="text-container">
                                    <GaleryText
                                        h3text="Visión Clara (para Cada Momento)"
                                        ptext="¿Buscas lentes que se adapten a cada aspecto de tu vida? (Explora nuestra colección) de lentes todoterreno y descubre cómo pueden mejorar tu visión y tu estilo, tanto en la ciudad como en la naturaleza. "
                                    />
                                    <DirectBtn
                                        title="Explorar"
                                        blinPath="/catalog"
                                    />
                                </div>
                                <div className="img-container">
                                    <img
                                        src={storen4}
                                        alt="Lentes de sol en diversas situaciones"
                                    />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
