import i18n from "i18next";
import { initReactI18next } from "react-i18next";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    debug: true,
    detection: {
      order: ["cookie", "navigator"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    missingKeyHandler: function (lng, namespace, key, fallbackValue) {
      console.warn(`Missing Translation Key ${key}`);
    },
  });
}

export default i18n;
