import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";

if (!i18n.isInitialized) {
  i18n
    .use(Backend)
    .use(initReactI18next)
    .init(
      {
        lng: "en",
        fallbackLng: "en",
        debug: true,
        detection: {
          order: ["cookie", "navigator"],
          caches: ["cookie"],
        },
        backend: {
          loadPath: "/assets/locales/{{lng}}/{{ns}}.json",
        },
        missingKeyHandler: (
          lngs: string,
          ns: string,
          key: string,
          fallbackValue: string
        ) => {
          console.warn(`Missing Translation Key ${key}`);
        },
      },
      (err) => {
        if (err) {
          console.error(err);
        }
      }
    );
}

export default i18n;
