import React from "react";
import "../css/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faInstagram, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";  // Importation de Link pour la navigation

function Footer() {
  return (
    <footer className="bg-light py-5">
      <div className="container px-4 px-lg-5">
        {/* Liens vers les réseaux sociaux avec icônes */}
        <div className="social-links text-center">
          <a href="https://www.facebook.com/profile.php?id=100074472115745" target="_blank" rel="noopener noreferrer" className="mx-3">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/issa-kamara-89097b328/" target="_blank" rel="noopener noreferrer" className="mx-3">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://www.instagram.com/reactdevelop958/" target="_blank" rel="noopener noreferrer" className="mx-3">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.github.com/IssaKamara858" target="_blank" rel="noopener noreferrer" className="mx-3">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://x.com/ISSAKAM74750821" target="_blank" rel="noopener noreferrer" className="mx-3">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="mailto:issakamara958@gmail.com" className="mx-3">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>

        {/* Bouton qui mène vers le CV */}
        <div className="text-center mt-4">
          <Link
            to="/Cv.js"  // Lien vers la page CV (Cv.js)
            className="btn btn-primary"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              fontSize: "16px",
              fontWeight: "bold",
              textDecoration: "none",
              color: "#fff",
              backgroundColor: "#007bff",
              borderRadius: "5px",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#0056b3";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#007bff";
            }}
          >
            Voir mon CV
          </Link>
        </div>

        {/* Copyright */}
        <div className="small text-center text-muted mt-4">
          Copyright &copy; 2024 - Issa Kamara
        </div>
      </div>
    </footer>
  );
}

export default Footer;
