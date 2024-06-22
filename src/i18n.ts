import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import tw from 'SRC/localization/tw.json';
import en from 'SRC/localization/en.json';
import kr from 'SRC/localization/kr.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    tw: {
      translation: tw,
    },
    kr: {
      translation: kr,
    },
  },
  lng: 'tw',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
