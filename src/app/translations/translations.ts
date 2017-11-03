import { OpaqueToken } from '@angular/core';

// import translations
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';

// translation token
export const TRANSLATIONS = new OpaqueToken('translations');

// all translations
export const dictionary = {
    [LANG_EN_NAME]: LANG_EN_TRANS,
};

// providers
export const TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary },
];