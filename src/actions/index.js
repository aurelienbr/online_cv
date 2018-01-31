const TRANSLATIONS = {
  en: {
    "header.home": "home",
    "header.about": "about me",
    "header.education": "education",
    "header.contact": "contact",
    "home.name": "Aurelien Brachet",
    "home.fonction": "Javascript Developper",
    "about.title": "About me",
    "education.education": "Education",
    "education.internship": "Internship"
  },
  fr: {
    "header.home": "acceuil",
    "header.about": "a propos",
    "header.education": "parcours",
    "header.contact": "contact",
    "home.name": "Aurelien Brachet",
    "home.fonction": "Développeur Javascript",
    "about.title": "A propos",
    "education.education": "Scolarite",
    "education.internship": "Stage"
  },
  ru: {
    "header.home": "прием",
    "header.about": "кстати",
    "header.education": "образование",
    "header.contact": "контакт",
    "home.name": "Орельен Браше",
    "home.fonction": "Программист JavaScript",
    "about.title": "Обо мне",
    "education.education": "Oбразование",
    "education.internship": "Интернатура"
  }
};

export const getTranslations = () => ({
  payload: TRANSLATIONS,
  type: "GET_TRANSLATIONS"
});

export const changeLocale = locale => ({
  payload: locale,
  type: "CHANGE_LOCAL"
});
