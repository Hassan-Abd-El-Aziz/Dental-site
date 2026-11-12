import ar from './ar.js';
import en from './en.js';

const resolvedAr = (ar && ar.default) ? ar.default : ar;
const resolvedEn = (en && en.default) ? en.default : en;

export const messages = {
  ar: resolvedAr,
  en: resolvedEn
};

export function getTranslation(lang, path) {
  const current = (messages[lang] && messages[lang].default) 
    ? messages[lang].default 
    : (messages[lang] || messages.ar);
  const keys = path.split('.');
  let result = current;
  for (const k of keys) {
    if (result && result[k] !== undefined) {
      result = result[k];
    } else {
      // Fallback to ar
      let fallback = (messages.ar && messages.ar.default) ? messages.ar.default : messages.ar;
      for (const fk of keys) {
        if (fallback && fallback[fk] !== undefined) fallback = fallback[fk];
        else return path;
      }
      return fallback;
    }
  }
  return result;
}
