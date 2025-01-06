import { register, init, locale } from 'svelte-i18n'
import { browser } from '$app/environment'

export interface Locale {
  id: string
  title: string
}

export const supportedLocales: Locale[] = [
  {
    id: 'en',
    title: 'English (US)',
  },
  {
    id: 'cs',
    title: 'Česky',
  }]

export function tryLocale(lang: string) {
  if (supportedLocales?.some(l => l.id === lang)) {
    locale.set(lang)
    return true
  }
  let normalizedLang = lang.split(';')[0]
  if (supportedLocales?.some(l => l.id === normalizedLang)) {
    locale.set(lang)
    return true
  }
  normalizedLang = lang.split('-')[0]
  if (supportedLocales?.some(l => l.id === normalizedLang)) {
    locale.set(lang)
    return true
  }
  return false
}

export function initLocale() {
  for (const locale of supportedLocales) {
    register(locale.id, () => import(`$locale/${locale.id}.json`))
  }

  const defaultLanguage = 'en'

  init({
    fallbackLocale: defaultLanguage,
    initialLocale: browser ? window.navigator.language : defaultLanguage,
  })
}

