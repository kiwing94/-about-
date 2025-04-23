const translations = {
  en: {
    title: "Welcome to Hikari-Flux",
    intro: "Here, your creativity flows.",
    languageSelect: "Select Your Language",
    buttonEnglish: "English",
    buttonSwedish: "Svenska",
    buttonSpanish: "Español",
    buttonItalian: "Italiano",
    buttonFrench: "Français"
  },
  sv: {
    title: "Välkommen till Hikari-Flux",
    intro: "Här flödar din kreativitet.",
    languageSelect: "Välj Ditt Språk",
    buttonEnglish: "Engelska",
    buttonSwedish: "Svenska",
    buttonSpanish: "Spanska",
    buttonItalian: "Italienska",
    buttonFrench: "Franska"
  },
  es: {
    title: "Bienvenido a Hikari-Flux",
    intro: "Aquí, tu creatividad fluye.",
    languageSelect: "Selecciona Tu Idioma",
    buttonEnglish: "Inglés",
    buttonSwedish: "Sueco",
    buttonSpanish: "Español",
    buttonItalian: "Italiano",
    buttonFrench: "Francés"
  },
  it: {
    title: "Benvenuto su Hikari-Flux",
    intro: "Qui, la tua creatività scorre.",
    languageSelect: "Seleziona la tua lingua",
    buttonEnglish: "Inglese",
    buttonSwedish: "Svedese",
    buttonSpanish: "Spagnolo",
    buttonItalian: "Italiano",
    buttonFrench: "Francese"
  },
  fr: {
    title: "Bienvenue sur Hikari-Flux",
    intro: "Ici, votre créativité coule.",
    languageSelect: "Sélectionner votre langue",
    buttonEnglish: "Anglais",
    buttonSwedish: "Suédois",
    buttonSpanish: "Espagnol",
    buttonItalian: "Italien",
    buttonFrench: "Français"
  }
};

function applyLanguage(language) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[language] && translations[language][key]) {
      element.innerText = translations[language][key];
    }
  });
}

function setLanguage(lang) {
  localStorage.setItem("language", lang);
  applyLanguage(lang);
}

// Load selected language from localStorage
const selectedLanguage = localStorage.getItem("language") || "en";
applyLanguage(selectedLanguage);