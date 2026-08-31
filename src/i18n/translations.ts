import type { Locale } from "./config";

export const translations = {
  en: {
    nav: {
      home: "Home",
      theme: "Theme",
      language: "Language",
      switchTo: "Switch to Spanish",
    },
    hero: {
      greeting: "Hi, I'm",
    },
    about: {
      title: "About",
    },
    work: {
      title: "Work Experience",
      present: "Present",
    },
    education: {
      title: "Education",
    },
    skills: {
      title: "Skills",
    },
    projects: {
      badge: "My Projects",
      title: "Check out my latest work",
      description:
        "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
    },
    hackathons: {
      badge: "Hackathons",
      title: "I like building things",
      description:
        "During my time studying, I attended {count}+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.",
    },
    contact: {
      badge: "Contact",
      title: "Get in Touch",
      prefix: "Want to chat? Just",
      link: "send me an email",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      theme: "Tema",
      language: "Idioma",
      switchTo: "Cambiar a inglés",
    },
    hero: {
      greeting: "Hola, soy",
    },
    about: {
      title: "Sobre mí",
    },
    work: {
      title: "Experiencia Laboral",
      present: "Actualidad",
    },
    education: {
      title: "Educación",
    },
    skills: {
      title: "Habilidades",
    },
    projects: {
      badge: "Mis Proyectos",
      title: "Descubre mis últimos trabajos",
      description:
        "He trabajado en una gran variedad de proyectos, desde sitios web simples hasta aplicaciones web complejas. Aquí tienes algunos de mis favoritos.",
    },
    hackathons: {
      badge: "Hackathones",
      title: "Me gusta construir cosas",
      description:
        "Durante mis estudios, participé en {count}+ hackathones. Gente de todo el país se reunía para construir cosas increíbles en 2-3 días. Fue revelador ver las infinitas posibilidades que cobraban vida gracias a un grupo de personas motivadas y apasionadas.",
    },
    contact: {
      badge: "Contacto",
      title: "Ponte en Contacto",
      prefix: "¿Quieres charlar? Solo",
      link: "envíame un email",
    },
  },
} as const;

export type Translations = typeof translations.en;
export type TranslationKey = keyof Translations;

export function getTranslations(locale: Locale) {
  return translations[locale] ?? translations.en;
}
