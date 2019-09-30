export const languages = {
  en: require('./translations/en.json'),
  es: require('./translations/es.json')
};

export type ILocaleId = keyof typeof languages