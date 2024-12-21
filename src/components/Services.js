import React from 'react';
import '../css/App.css';

function Services() {
    const services = [
        {
            id: 1,
            icon: 'bi-gem',
            title: 'Thèmes Robustes',
            description: 'Des thèmes mis à jour régulièrement pour rester performants.',
        },
        {
            id: 2,
            icon: 'bi-laptop',
            title: 'Toujours à jour',
            description: 'Toutes les dépendances sont constamment mises à jour.',
        },
        {
            id: 3,
            icon: 'bi-globe',
            title: 'Prêt à publier',
            description: 'Utilisable tel quel ou personnalisable à votre convenance.',
        },
        {
            id: 4,
            icon: 'bi-heart',
            title: 'Fait avec passion',
            description: 'Chaque projet est conçu avec soin et dévouement.',
        },
    ];

    return (
        <section className="page-section" id="services">
            <div className="container px-4 px-lg-5">
                <h2 className="text-center mt-0">À votre service</h2>
                <hr className="divider" />
                <div className="row gx-4 gx-lg-5">
                    {services.map((service) => (
                        <div className="col-lg-3 col-md-6 text-center" key={service.id}>
                            <div className="mt-5">
                                <div className="mb-2">
                                    <i className={`${service.icon} fs-1 text-primary`}></i>
                                </div>
                                <h3 className="h4 mb-2">{service.title}</h3>
                                <p className="text-muted mb-0">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;