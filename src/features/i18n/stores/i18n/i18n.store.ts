import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../../resources/en/translation.json';
import ruTranslation from '../../resources/ru/translation.json';
//empty for now
const resources = {
  en: {
    translation: enTranslation,
  },
  ru: {
    translation: ruTranslation,
  },
};

export class I18nStore {
  constructor() {}

  async init() {
    await i18n.use(initReactI18next).init({
      resources,
      compatibilityJSON: 'v3',
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    });
  }
}

export const i18nStoreSingleton = new I18nStore();
