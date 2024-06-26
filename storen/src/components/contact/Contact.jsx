import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';
import '../../styles/ContactForm.css';
import GaleryText from '../main/GaleryText';
import logoSvgBlack from '../../assets/svg/storenBlack.svg';

// Configura tus datos de EmailJS
const SERVICE_ID = 'service_8tsbeqf';
const TEMPLATE_ID = 'template_w66l5mu';
const PUBLIC_KEY = 'RnoYNIg0ON4293DtL'; // Aquí va tu Public Key de EmailJS

const schema = yup.object().shape({
    name: yup.string().required('El nombre es obligatorio').max(50, 'Máximo 50 caracteres'),
    email: yup.string().required('El correo electrónico es obligatorio').email('Correo electrónico no válido'),
    message: yup.string().required('El mensaje es obligatorio').max(500, 'Máximo 500 caracteres')
});

const ContactForm = () => {
    const location = useLocation();
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const lensName = searchParams.get('lens');
        if (lensName) {
            setValue('message', `Quisiera hacerles unas consultas sobre los lentes ${lensName}`);
        }
    }, [location.search, setValue]);

    const onSubmit = async (data) => {
        console.log('Datos enviados:', data);

        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            message: data.message,
        };

        try {
            const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
            console.log('Correo enviado:', response);
            alert('Mensaje enviado con éxito.');
            reset();
        } catch (error) {
            console.error('Error al enviar el formulario', error);
            alert('Hubo un error al enviar el mensaje.');
        }
    };

    return (
        <main>
            <div className="form-adjuster">
                <div className="logo-form-container">
                    <img className='storenLogo' src={logoSvgBlack} alt="LogoStoren" />
                    <h2>RESISTENCIA Y ESTILO</h2>
                </div>
                <GaleryText
                    h3text="Ponte en (Contacto)!"
                    ptext="En (STOREN), nos dedicamos a fabricar lentes de la más alta calidad para todo tipo de necesidades, desde lentes de sol hasta soluciones ópticas especializadas. Si tienes alguna pregunta, consulta, o simplemente deseas conocer más sobre nuestros productos y servicios, estamos aquí para ayudarte."
                />
                <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="name" {...register('name')} />
                        {errors.name && <p className="error">{errors.name.message}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico:</label>
                        <input type="email" id="email" {...register('email')} />
                        {errors.email && <p className="error">{errors.email.message}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensaje:</label>
                        <textarea id="message" {...register('message')} />
                        {errors.message && <p className="error">{errors.message.message}</p>}
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </main>
    );
};

export default ContactForm;
