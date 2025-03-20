import React, { useState } from "react";
import "./header.css";
import flagEnglish from "../../assets/engl.png"; // Remplacez avec le chemin vers votre image du drapeau anglais
import flagFrench from "../../assets/fr.jpg"; // Remplacez avec le chemin vers votre image du drapeau français

const Header = () => {
  // Définir l'état pour la langue
  const [language, setLanguage] = useState("en"); // "en" pour anglais, "fr" pour français

  // Gestion du changement de langue
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    // Vous pouvez également ajouter une logique ici pour gérer la traduction, soit par l'outil i18n ou en changeant les textes manuellement.
  };

  /*=============== Change Background Header ===============*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        {/* Retirer l'image du logo et ajouter le sélecteur de langue directement dans la barre de navigation */}
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-estate nav__icon"></i> {language === "en" ? "Home" : "Accueil"}
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-user nav__icon"></i> {language === "en" ? "About" : "À propos"}
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-file-alt nav__icon"></i> {language === "en" ? "Skills" : "Compétences"}
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> {language === "en" ? "Services" : "Services"}
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-scenery nav__icon"></i> {language === "en" ? "Projects" : "Projets"}
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-message nav__icon"></i> {language === "en" ? "Contact" : "Contact"}
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>

        {/* Boutons de sélection de langue */}
        <div className="language-switcher">
          <button onClick={() => handleLanguageChange("fr")}>
            <img src={flagFrench} alt="French Flag" style={{ width: "25px", marginRight: "10px" }} />
          </button>
          <button onClick={() => handleLanguageChange("en")}>
            <img src={flagEnglish} alt="English Flag" style={{ width: "25px" }} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;