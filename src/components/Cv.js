import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import "./Cv.css";

const Cv = () => {
  const [openSection, setOpenSection] = useState(null);
  const [isReady, setIsReady] = useState(false);

  // S'assurer que le document est entièrement chargé avant de générer le PDF
  useEffect(() => {
    setIsReady(true);
  }, []);

  // Fonction pour basculer la visibilité des sections
  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  // Fonction pour télécharger le CV en PDF
  const downloadCV = () => {
    if (!isReady) return; // Vérifier que la page est prête avant de générer le PDF

    const doc = new jsPDF();
    const content = document.getElementById("cv-content");
    if (content) {
      doc.html(content, {
        callback: function (doc) {
          doc.save("cv_issa_kamara.pdf");
        },
        x: 10,
        y: 10,
      });
    } else {
      console.error("Élément avec l'ID 'cv-content' introuvable.");
    }
  };

  return (
    <div className="cv-container">
      <header className="cv-header">
        <h1>Issa Kamara</h1>
        <p>
          Thiès, Sénégal | +221776828441 |{" "}
          <a href="mailto:issakamara958@gmail.com">issakamara958@gmail.com</a>
        </p>
        <div className="image">
          <img src="./img/issa.jpg" alt="Issa Kamara" />
        </div>
      </header>

      {/* Section CV */}
      <div id="cv-content">
        {/* Section À Propos */}
        <section
          id="about"
          className="section"
          onClick={() => toggleSection("about")}
        >
          <h2>À Propos</h2>
          {openSection === "about" && (
            <p>
              Développeur web, entrepreneur et gestionnaire passionné, spécialisé
              dans le développement de solutions numériques et la gestion de
              projets digitaux. Basé à Thiès, je suis également impliqué dans des
              initiatives locales comme la création de GIE et le soutien aux jeunes
              talents. Ainsi, j'ai pu créer mon entreprise{" "}
              <strong>Chackor Organisation</strong>, une entreprise de production de
              divers produits et services, notamment <strong>Achakourou Café Touba</strong>{" "}
              ainsi que le service <strong>Achakourou Digital Service</strong>.
            </p>
          )}
        </section>

        {/* Autres Sections ici */}
      </div>

      {/* Bouton pour télécharger le CV en PDF */}
      <footer className="cv-footer">
        <button onClick={downloadCV} className="btn btn-primary">
          Télécharger le CV en PDF
        </button>
      </footer>
    </div>
  );
};

export default Cv;
