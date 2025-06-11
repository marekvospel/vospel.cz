import { register, init } from 'svelte-i18n'

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

export function findLocale(locales: readonly string[]): string | undefined {
  for (const lang of locales) {
    let normalizedLang = lang.split(';')[0].toLowerCase()
    if (supportedLocales?.some(l => l.id === normalizedLang))
      return normalizedLang
    normalizedLang = normalizedLang.split('-')[0].toLowerCase()
    if (supportedLocales?.some(l => l.id === normalizedLang))
      return normalizedLang
  }

  return undefined
}

export function initLocale() {
  for (const locale of supportedLocales) {
    register(locale.id, () => import(`$locale/${locale.id}.json`))
  }

  const defaultLanguage = 'en'

  init({
    fallbackLocale: defaultLanguage,
    initialLocale: defaultLanguage,
  })
}

