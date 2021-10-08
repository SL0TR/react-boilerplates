import config from 'config';

const language = config.defaultLanguage;

const langConfig = {
  defaultLanguage: language,
  options: [
    {
      languageId: 'english',
      locale: 'en',
      text: 'English',
      icon: '',
    },
    {
      languageId: 'bangla',
      locale: 'bn',
      text: 'Bangla',
      icon: '',
    },
  ],
};

export function getCurrentLanguage(lang) {
  let selecetedLanguage = langConfig.options[0];
  langConfig.options.forEach(l => {
    if (l.languageId === lang) {
      selecetedLanguage = l;
    }
  });
  return selecetedLanguage;
}
export default langConfig;
