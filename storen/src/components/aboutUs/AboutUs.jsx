import React from 'react';
import Title from '../Title';
import GaleryText from '../main/GaleryText';
import img1 from '../../assets/imgs/AboutUs/img1.png';
import img3 from '../../assets/imgs/AboutUs/img3.png';
import "../../styles/aboutUs.css";

const sections = [
    {
        imgSrc: img1,
        texts: [
            {
                h3text: "(STOREN: Excelencia y Durabilidad en Cada Par de Lentes)",
                ptext: "En Storen, nos especializamos en ofrecerte lentes de sol y ópticos que no solo destacan por su estilo, sino también por su excepcional calidad y resistencia. Nuestra misión es proporcionar productos que combinen funcionalidad y moda, asegurando que cada cliente disfrute de una visión clara y protegida con estilo."
            },
            {
                h3text: "(Materiales de Alta Calidad)",
                ptext: "Nuestros lentes están fabricados con materiales importados de primera calidad, seleccionados cuidadosamente para garantizar una durabilidad superior. Sabemos que los lentes deben resistir el uso diario y las condiciones más exigentes, por eso, en Storen, utilizamos únicamente materiales que superan las pruebas más rigurosas."
            }
        ]
    },
    {
        imgSrc: img1,
        texts: [
            {
                h3text: "(Resistencia y Durabilidad)",
                ptext: "La resistencia de nuestros productos es una de nuestras mayores prioridades. Cada par de lentes pasa por un proceso de pruebas exhaustivas para asegurar que cumplan con los más altos estándares de calidad. Desde la resistencia a los impactos hasta la durabilidad frente a los rayones, nuestros lentes están diseñados para soportar las demandas del día a día sin perder su elegancia y funcionalidad."
            },
            {
                h3text: "(Pruebas de Excelencia)",
                ptext: "En Storen, nos enorgullecemos de la excelencia de nuestros productos. Antes de llegar a tus manos, cada par de lentes es sometido a una serie de pruebas de calidad que incluyen: Pruebas de Impacto: Asegurando que los lentes puedan resistir caídas y golpes accidentales. Pruebas de Resistencia a Rayones: Garantizando que los cristales mantengan su claridad con el uso continuo. Pruebas de Flexibilidad: Evaluando la capacidad de los armazones para doblarse sin romperse."
            }
        ]
    },
    {
        imgSrc: img3,
        texts: [
            {
                h3text: "(Compromiso con la Satisfacción del Cliente)",
                ptext: "Nuestro compromiso no termina con la venta. En Storen, estamos dedicados a ofrecer un servicio al cliente excepcional. Creemos que cada cliente merece productos de alta calidad que no solo cumplan, sino que superen sus expectativas. Si buscas lentes que combinan durabilidad, estilo y excelencia, Storen es tu elección ideal."
            },
            {
                h3text: "(Innovación y Estilo)",
                ptext: "Constantemente buscamos innovar y mejorar nuestros productos para mantenernos a la vanguardia de la moda y la tecnología óptica. Nuestro equipo de diseñadores y expertos en óptica trabaja sin descanso para crear modelos que se adapten a las últimas tendencias, sin comprometer la calidad y la resistencia que nos caracterizan."
            }
        ]
    }
];

const AboutUsSection = ({ imgSrc, texts, altOrder }) => (
    <div className={`aboutUs-text-img-container ${altOrder ? 'alt-order' : ''}`}>
        <div className="aboutUs-text-container">
            {texts.map((text, index) => (
                <GaleryText key={index} h3text={text.h3text} ptext={text.ptext} />
            ))}
        </div>
        <img src={imgSrc} alt="Cortadora de Marcos" />
    </div>
);

export const AboutUs = () => {
    return (
        <div className='aboutUs-adjuster'>
            <Title text="SOBRE NOSOTROS" color="#262626" />
            {sections.map((section, index) => (
                <AboutUsSection key={index} imgSrc={section.imgSrc} texts={section.texts} altOrder={index % 2 === 1} />
            ))}
        </div>
    );
};

export default AboutUs;
