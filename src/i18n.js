// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Configuration des ressources de langue
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        hi: "Hi",
        welcome: "Welcome!",
        home: "Home",
        about: "About",
        contact: "Contact",
        // Ajoutez d'autres traductions pour l'anglais
      },
    },
    fr: {
      translation: {
        hi: "Bonjour",
        welcome: "Bienvenue!",
        home: "Accueil",
        about: "À propos",
        contact: "Contact",
        // Ajoutez d'autres traductions pour le français
      },
    },
  },
  lng: "fr", // Langue par défaut
  fallbackLng: "fr", // Langue de secours si une traduction est manquante
  interpolation: {
    escapeValue: false, // React s'en occupe
  },
});

export default i18n;