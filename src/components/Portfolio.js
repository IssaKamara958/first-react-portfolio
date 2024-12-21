import React from 'react'; // Import React
import '../css/App.css'; // Import de la feuille de style CSS
// import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

// Importation des images
import thumbnail1 from '../assets/img/portfolio/fullsize/1.jpg';
import fullsize1 from '../assets/img/portfolio/fullsize/1.jpg';
import thumbnail2 from '../assets/img/portfolio/fullsize/2.jpg';
import fullsize2 from '../assets/img/portfolio/fullsize/2.jpg';
import thumbnail3 from '../assets/img/portfolio/fullsize/3.jpg';
import fullsize3 from '../assets/img/portfolio/fullsize/3.jpg';
import thumbnail4 from '../assets/img/portfolio/fullsize/7.jpg';
import fullsize4 from '../assets/img/portfolio/fullsize/7.jpg';
import thumbnail5 from '../assets/img/portfolio/fullsize/8.jpg';
import fullsize5 from '../assets/img/portfolio/fullsize/8.jpg';
import thumbnail6 from '../assets/img/portfolio/fullsize/6.jpg';
import fullsize6 from '../assets/img/portfolio/fullsize/6.jpg';

function Portfolio() {
    return (
        <div className="row">
            {/* Projet 1 */}
            <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href={fullsize1} title="Projet 1">
                    <img className="img-fluid" src={thumbnail1} alt="Projet 1" />
                    <div className="portfolio-box-caption">
                        <div className="project-category text-white-50">Buzness</div>
                        <div className="project-name">Productions, Achats et Ventes de diverses produits notamment le café <strong><span>Achakourou<i>Café Touba</i></span></strong></div>
                    </div>
                </a>
            </div>

            {/* Projet 2 */}
            <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href={fullsize2} title="Projet 2">
                    <img className="img-fluid" src={thumbnail2} alt="Projet 2" />
                    <div className="portfolio-box-caption">
                        <div className="project-category text-white-50">Catégorie</div>
                        <div className="project-name">Peinture et Décoration Mobiliers</div>
                    </div>
                </a>
            </div>

            {/* Projet 3 */}
            <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href={fullsize3} title="Projet 3">
                    <img className="img-fluid" src={thumbnail3} alt="Projet 3" />
                    <div className="portfolio-box-caption">
                        <div className="project-category text-white-50">Catégorie</div>
                        <div className="project-name">Développement Web App web et Mobile</div>
                    </div>
                </a>
            </div>

            {/* Projet 4 */}
            <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href={fullsize4} title="Projet 4">
                    <img className="img-fluid" src={thumbnail4} alt="Projet 4" />
                    <div className="portfolio-box-caption">
                        <div className="project-category text-white-50">Catégorie</div>
                        <div className="project-name">Production de Café : Achakourou Café Touba</div>
                    </div>
                </a>
            </div>

            {/* Projet 5 */}
            <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href={fullsize5} title="Projet 5">
                    <img className="img-fluid" src={thumbnail5} alt="Projet 5" />
                    <div className="portfolio-box-caption">
                        <div className="project-category text-white-50">Catégorie</div>
                        <div className="project-name">Gestion des Urgences en Médecine</div>
                    </div>
                </a>
            </div>

            {/* Projet 6 */}
            <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href={fullsize6} title="Projet 6">
                    <img className="img-fluid" src={thumbnail6} alt="Projet 6" />
                    <div className="portfolio-box-caption">
                        <div className="project-category text-white-50">Catégorie</div>
                        <div className="project-name">Prestation de services independant</div>
                    </div>
                </a>
            </div>

                {/* <ScrollLink
                    to="Contact"
                    smooth={true}
                    duration={500}
                    className="btn btn-primary btn-xl"
                >
                    En savoir plus
                </ScrollLink> */}

                <Link
                    to="/contact"
                    className="btn btn-primary btn-xl"
                    style={{
                        display: "inline-block",
                        padding: "15px 30px",
                        fontSize: "18px",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        color: "#fff",
                        backgroundColor: "#007bff",
                        borderRadius: "8px",
                        transition: "background-color 0.3s ease, transform 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#0056b3"; // Couleur au survol
                        e.target.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#007bff"; // Couleur normale
                        e.target.style.transform = "scale(1)";
                    }}
                >
                    En savoir plus
                </Link>

        </div>
    );
}

export default Portfolio;