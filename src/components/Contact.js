import React, { useState } from 'react';
import '../css/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const validateForm = (data) => {
        let errors = {};
        if (!data.name.trim()) errors.name = 'Le nom est requis.';
        if (!data.email) {
            errors.email = 'L\'email est requis.';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'L\'email est invalide.';
        }
        if (!data.phone) {
            errors.phone = 'Le numéro de téléphone est requis.';
        } else if (!/^\d+$/.test(data.phone)) {
            errors.phone = 'Le numéro de téléphone doit être numérique.';
        }
        if (!data.message.trim()) errors.message = 'Le message est requis.';
        return errors;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validateForm(formData);
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            const formValid = Math.random() > 0.5; // Simulation de validation
            if (formValid) {
                setIsSuccess(true);
                setIsError(false);
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setIsSuccess(false);
                setIsError(true);
            }
        } else {
            setIsSuccess(false);
        }
    };

    return (
        <div style={{ position: 'relative' }}>
            <form onSubmit={handleSubmit} className="contact-form">
                <h2>Contactez-nous</h2>
                <div className="form-field">
                    <label htmlFor="name">Nom complet :</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        aria-required="true"
                        className={formErrors.name ? 'error' : ''}
                    />
                    {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                </div>
                <div className="form-field">
                    <label htmlFor="email">Adresse e-mail :</label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        aria-required="true"
                        className={formErrors.email ? 'error' : ''}
                    />
                    {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                </div>
                <div className="form-field">
                    <label htmlFor="phone">Numéro de téléphone :</label>
                    <input
                        type="text"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        aria-required="true"
                        className={formErrors.phone ? 'error' : ''}
                    />
                    {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
                </div>
                <div className="form-field">
                    <label htmlFor="message">Message :</label>
                    <textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        aria-required="true"
                        className={formErrors.message ? 'error' : ''}
                    />
                    {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                </div>
                <button type="submit">Envoyer</button>
                {isSuccess && <p className="success-message">Votre message a été envoyé avec succès.</p>}
                {isError && <p className="error-message">Une erreur est survenue, veuillez réessayer.</p>}
            </form>
            <div className="whatsapp-icon">
                <a
                    href={`https://wa.me/221776828441`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contacter sur WhatsApp"
                >
                    <FontAwesomeIcon icon={faWhatsapp} size="3x" />
                </a>
            </div>
        </div>
    );
}

export default Contact;