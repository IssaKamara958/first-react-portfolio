import React from 'react';
import { Link } from "react-router-dom";

function About() {
    return (
        <section className="page-section bg-primary" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="text-white mt-0">Tout ce dont vous avez besoin !</h2>
                        <hr className="divider divider-light" />
                        <p className="text-white-75 mb-4">
                            Avec mes compétences et mon expérience, je vous accompagne dans la création de votre site web moderne et responsive.
                        </p>
                        
                            <Link to="/services" className="btn btn-light btn-xl">
                                Démarrer
                            </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
