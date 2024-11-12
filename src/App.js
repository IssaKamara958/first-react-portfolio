import React from 'react';
import './css/App.css'; // Importation des styles CSS

// Importation des composants
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Header />
            <About />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
