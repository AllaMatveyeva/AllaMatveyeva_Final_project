import { useEffect } from "react";
import { useState } from "react";
import { translatesEn } from "../components/resources/translates/translatesEn";
import { translatesRu } from "../components/resources/translates/translatesRu";

const locales = {
  en: translatesEn,
  ru: translatesRu,
};
const subscribes = [];
let globalLanguage = localStorage.getItem("lang") || "en";

const setGlobalLanguage = (lang) => {
  if (globalLanguage === lang) return;

  globalLanguage = lang;
  subscribes.forEach((subscribe) => subscribe(globalLanguage));
};
const translate = (textId) => locales[globalLanguage][textId] || textId;

export const withTranslator = (Component) => (props) => {
  const [language, setLanguage] = useState(globalLanguage);

  useEffect(() => {
    const f = (lang) => setLanguage(lang);
    subscribes.push(f);

    return () => {
      const i = subscribes.findIndex(f);
      subscribes.splice(i, 1);
    };
  }, []);

  return (
    <Component
      translate={translate}
      language={language}
      setLanguage={setGlobalLanguage}
      {...props}
    />
  );
};
