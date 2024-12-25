import { register, init, locale } from 'svelte-i18n'
import { browser } from '$app/environment'

export const supportedLocales = ['en', 'cs']

export function tryLocale(lang: string) {
  if (supportedLocales?.includes(lang)) {
    locale.set(lang)
    return true
  }
  let normalizedLang = lang.split(';')[0]
  if (supportedLocales?.includes(normalizedLang)) {
    locale.set(lang)
    return true
  }
  normalizedLang = lang.split('-')[0]
  if (supportedLocales?.includes(normalizedLang)) {
    locale.set(lang)
    return true
  }
  return false
}

export function initLocale() {
  for (const locale of supportedLocales) {
    register(locale, () => import(`$locale/${locale}.json`))
  }

  const defaultLanguage = 'en'

  init({
    fallbackLocale: defaultLanguage,
    initialLocale: browser ? window.navigator.language : defaultLanguage,
  })
}

