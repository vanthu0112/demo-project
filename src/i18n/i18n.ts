import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {
  navigationEN,
  featuresEN,
  pricingEN,
  testimonialsEN,
  contactEN,
  footerEN,
  heroEN,
  themeEN,
} from "./locales/en";
import {
  navigationVI,
  featuresVI,
  pricingVI,
  testimonialsVI,
  contactVI,
  footerVI,
  heroVI,
  themeVI,
} from "./locales/vi";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        navigation: navigationEN,
        hero: heroEN,
        features: featuresEN,
        pricing: pricingEN,
        testimonials: testimonialsEN,
        contact: contactEN,
        footer: footerEN,
        theme: themeEN,
      },
      vi: {
        navigation: navigationVI,
        hero: heroVI,
        features: featuresVI,
        pricing: pricingVI,
        testimonials: testimonialsVI,
        contact: contactVI,
        footer: footerVI,
        theme: themeVI,
      },
    },
    fallbackLng: "vi",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;
