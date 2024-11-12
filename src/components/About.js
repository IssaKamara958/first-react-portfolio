import React from 'react';
import '../css/App.css';

function About() {
    return (
        <section class="page-section bg-primary" id="about">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="text-white mt-0">Tout ce dont vous avez besoin !</h2>
                        <hr class="divider divider-light" />
                        <p class="text-white-75 mb-4">Avec mes compétences et mon expérience, je vous accompagne dans la création de votre site web moderne et responsive. </p>
                        <a class="btn btn-light btn-xl" href="#services">Démarrer</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
