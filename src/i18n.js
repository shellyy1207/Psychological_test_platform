import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 從 locales 資料夾載入翻譯檔
import en from "./locales/en.json";
import zh from "./locales/zh.json";
import ja from "./locales/ja.json";

const resources = {
  en: { translation: en },
  zh: { translation: zh },
  ja: { translation: ja },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "zh", // 預設語言
    fallbackLng: "zh",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
