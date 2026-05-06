import { createI18n } from 'vue-i18n'
import en from './locales/en'
import fr from './locales/fr'

export const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'en', // set default locale
  fallbackLocale: 'fr', // set fallback locale
  globalInjection: true, // inject $t globally
  messages: {
    en,
    fr
  }
})
