import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import des composants nécessaires
import './css/App.css'; // Importation du fichier de styles CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import de Bootstrap

// Import des composants et pages
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Cv from './components/Cv';
import NotFound from './components/NotFound'; // Pour gérer les pages non trouvées

function App() {
    return (
        <Router>
            <div className="App">
                <Header /> {/* Le header est affiché sur toutes les pages */}
                <main>
                    <Routes>
                        <Route path="/" element={<About />} /> {/* Page d'accueil */}
                        <Route path="/services" element={<Services />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} /> {/* Route pour page 404 */}
                        {/* <Route path='/cv' element={<Cv/>} /> */}
                        
                    </Routes>
                </main>
                <Footer /> {/* Le footer est affiché sur toutes les pages */}
            </div>
        </Router>
    );
}

export default App;