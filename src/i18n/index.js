import ar from './ar.js';
import en from './en.js';

export const messages = {
  ar,
  en
};

export function getTranslation(lang, path) {
  const current = messages[lang] || messages.ar;
  const keys = path.split('.');
  let result = current;
  for (const k of keys) {
    if (result && result[k] !== undefined) {
      result = result[k];
    } else {
      // Fallback to ar
      let fallback = messages.ar;
      for (const fk of keys) {
        if (fallback && fallback[fk] !== undefined) fallback = fallback[fk];
        else return path;
      }
      return fallback;
    }
  }
  return result;
}
