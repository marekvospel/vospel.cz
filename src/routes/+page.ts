import type { PageLoad } from './$types'
import { browser } from '$app/environment'
import { redirect } from '@sveltejs/kit'
import { findLocale } from '../modules/i18n'

export const load: PageLoad = ({}) => {
  if (browser) {
    const lang = findLocale(navigator.languages) ?? 'en'

    throw redirect(307, `/${lang}/`)
  }

  return {}
}
