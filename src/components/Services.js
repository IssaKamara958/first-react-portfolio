import React from 'react';
import '../css/App.css';

function Services() {
    return (
        <section class="page-section" id="services">
            <div class="container px-4 px-lg-5">
                <h2 class="text-center mt-0">À votre service</h2>
                <hr class="divider" />
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-gem fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">Thèmes Robustes</h3>
                            <p class="text-muted mb-0">Des thèmes mis à jour régulièrement pour rester performants.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-laptop fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">Toujours à jour</h3>
                            <p class="text-muted mb-0">Toutes les dépendances sont constamment mises à jour.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-globe fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">Prêt à publier</h3>
                            <p class="text-muted mb-0">Utilisable tel quel ou personnalisable à votre convenance.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-heart fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">Fait avec passion</h3>
                            <p class="text-muted mb-0">Chaque projet est conçu avec soin et dévouement.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
