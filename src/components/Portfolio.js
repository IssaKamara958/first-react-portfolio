import React from 'react';
import '../css/App.css';

// Importation des images
import thumbnail1 from '../assets/img/portfolio/thumbnails/1.jpg';
import fullsize1 from '../assets/img/portfolio/fullsize/1.jpg';
import thumbnail2 from '../assets/img/portfolio/thumbnails/2.jpg';
import fullsize2 from '../assets/img/portfolio/fullsize/2.jpg';
import thumbnail3 from '../assets/img/portfolio/thumbnails/3.jpg';
import fullsize3 from '../assets/img/portfolio/fullsize/3.jpg';
import thumbnail4 from '../assets/img/portfolio/thumbnails/4.jpg';
import fullsize4 from '../assets/img/portfolio/fullsize/4.jpg';
import thumbnail5 from '../assets/img/portfolio/thumbnails/5.jpg';
import fullsize5 from '../assets/img/portfolio/fullsize/5.jpg';
import thumbnail6 from '../assets/img/portfolio/thumbnails/6.jpg';
import fullsize6 from '../assets/img/portfolio/fullsize/6.jpg';

function Portfolio() {
    return (
        <div className="row">
            <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href={fullsize1} title="Projet 1">
                    <img className="img-fluid" src={thumbnail1} alt="Projet 1" />
                    <div className="portfolio-box-caption">
                        <div className="project-category text-white-50">Catégorie</div>
                        <div className="project-name">Projet 1</div>
                    </div>
                </a>
            </div>

            <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href={fullsize2} title="Projet 2">
                    <img className="img-fluid" src={thumbnail2} alt="Projet 2" />
                    <div className="portfolio-box-caption">
                        <div className="project-category text-white-50">Catégorie</div>
                        <div className="project-name">Projet 2</div>
                    </div>
                </a>
            </div>

            <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href={fullsize3} title="Projet 3">
                    <img className="img-fluid" src={thumbnail3} alt="Projet 3" />
                    <div className="portfolio-box-caption">
                        <div className="project-category text-white-50">Catégorie</div>
                        <div className="project-name">Projet 3</div>
                    </div>
                </a>
            </div>

            <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href={fullsize4} title="Projet 4">
                    <img className="img-fluid" src={thumbnail4} alt="Projet 4" />
                    <div className="portfolio-box-caption">
                        <div className="project-category text-white-50">Catégorie</div>
                        <div className="project-name">Projet 4</div>
                    </div>
                </a>
            </div>

            <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href={fullsize5} title="Projet 5">
                    <img className="img-fluid" src={thumbnail5} alt="Projet 5" />
                    <div className="portfolio-box-caption">
                        <div className="project-category text-white-50">Catégorie</div>
                        <div className="project-name">Projet 5</div>
                    </div>
                </a>
            </div>

            <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href={fullsize6} title="Projet 6">
                    <img className="img-fluid" src={thumbnail6} alt="Projet 6" />
                    <div className="portfolio-box-caption">
                        <div className="project-category text-white-50">Catégorie</div>
                        <div className="project-name">Projet 6</div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Portfolio;
