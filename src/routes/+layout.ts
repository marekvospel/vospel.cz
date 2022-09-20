import '@unocss/reset/tailwind.css'
import 'uno.css'

import type { LayoutLoad } from './$types'
import { browser } from '$app/environment'

import { getLocaleFromNavigator, init, register, waitLocale } from 'svelte-i18n'

const locales = ['en', 'cz']

export const load: LayoutLoad = async () => {

  let locale = browser ? localStorage.getItem('locale') ?? getLocaleFromNavigator() ?? 'en' : 'en'
  if (!locales.includes(locale)) locale = 'en'

  locales.forEach((l) => {
    register(l, () => import(`$locale/${l}.json`))
  })

  init({
    fallbackLocale: 'en',
    initialLocale: locale,
  })

  await waitLocale(locale)

}

export const prerender = true
