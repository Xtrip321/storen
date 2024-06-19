import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import '../../styles/ContactForm.css';
import GaleryText from '../main/GaleryText';
import logoSvgBlack from '../../assets/svg/storenBlack.svg';

const schema = yup.object().shape({
    name: yup.string().required('El nombre es obligatorio').max(50, 'Máximo 50 caracteres'),
    email: yup.string().required('El correo electrónico es obligatorio').email('Correo electrónico no válido'),
    message: yup.string().required('El mensaje es obligatorio').max(500, 'Máximo 500 caracteres')
});

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                alert('Mensaje enviado con éxito.');
                reset();
            } else {
                alert('Hubo un problema al enviar el mensaje.');
            }
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
