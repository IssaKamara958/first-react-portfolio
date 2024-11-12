import React from 'react';
import '../css/App.css';

function Header() {
    return (
        <header class="masthead">
            <div class="container px-4 px-lg-5 h-100">
                <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div class="col-lg-8 align-self-end">
                        <h1 class="text-white font-weight-bold">Bienvenue dans mon univers créatif</h1>
                        <hr class="divider" />
                    </div>
                    <div class="col-lg-8 align-self-baseline">
                        <p class="text-white-75 mb-5">Je suis Issa Kamara, un développeur passionné par la création de sites dynamiques et modernes.</p>
                        <a class="btn btn-primary btn-xl" href="#about">En savoir plus</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
