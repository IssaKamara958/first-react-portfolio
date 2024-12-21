import React from 'react';
import '../css/App.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="masthead">
            <div className="container px-4 px-lg-5 h-100">
                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-end">
                        <h1 className="text-white font-weight-bold">Bienvenue dans mon univers créatif</h1>
                        <hr className="divider" />
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <p className="text-white-75 mb-5">Je suis Issa Kamara, un développeur passionné par la création de sites dynamiques et modernes.</p>
                        
                            <Link to="/portfolio" className="btn btn-primary btn-xl">
                                En savoir plus
                            </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
