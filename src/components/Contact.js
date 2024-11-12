import React, { useState } from 'react';
import '../css/App.css';

function Contact() {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Simulation d'un envoi de formulaire (en réalité, vous ferez un appel à une API ou un serveur)
        const formValid = Math.random() > 0.5; // 50% de chance de succès

        if (formValid) {
            setIsSuccess(true);
            setIsError(false);
        } else {
            setIsSuccess(false);
            setIsError(true);
        }
    };

    return (
        <section className="page-section" id="contact">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 col-xl-6 text-center">
                        <h2 className="mt-0">Contactez-moi</h2>
                        <hr className="divider" />
                        <p className="text-muted mb-5">Prêt à démarrer un projet ? Envoyez-moi un message et je reviendrai vers vous dès que possible.</p>
                    </div>
                </div>
                <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div className="col-lg-6">
                        <form id="contactForm" onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="name" type="text" placeholder="Votre nom" required />
                                <label htmlFor="name">Nom complet</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input className="form-control" id="email" type="email" placeholder="nom@exemple.com" required />
                                <label htmlFor="email">Adresse email</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" required />
                                <label htmlFor="phone">Numéro de téléphone</label>
                            </div>

                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="message" placeholder="Entrez votre message ici..." style={{ height: '10rem' }} required></textarea>
                                <label htmlFor="message">Message</label>
                            </div>

                            {/* Messages de succès ou d'erreur */}
                            {isSuccess && (
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">Soumission réussie !</div>
                                    Vous pouvez maintenant envoyer votre message.
                                </div>
                            )}

                            {isError && (
                                <div className="text-center text-danger mb-3">
                                    Erreur lors de l'envoi du message !
                                </div>
                            )}

                            <div className="d-grid">
                                <button className="btn btn-primary btn-xl" id="submitButton" type="submit">
                                    Envoyer le message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
