import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import fi from './locales/fi/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fi: { translation: fi },
    },
    lng: typeof window !== 'undefined' && window.localStorage?.getItem('lng')
      ? window.localStorage.getItem('lng')
      : 'fi',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

if (typeof window !== 'undefined') {
  i18n.on('languageChanged', (lng) => {
    try {
      window.localStorage.setItem('lng', lng);
    } catch (_) {}
  });
}

export default i18n;


