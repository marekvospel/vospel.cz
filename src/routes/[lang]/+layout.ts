import { locale, waitLocale } from 'svelte-i18n'
import { findLocale, initLocale } from '../../modules/i18n'
import type { LayoutLoad } from './$types'
import { browser } from '$app/environment'
import { error } from '@sveltejs/kit'

initLocale()

export const load: LayoutLoad = async ({ params }) => {
  const lang = findLocale([params.lang])

  if (!lang)
    throw error(404, 'Language not supported')

  if (!browser)
    locale.set(lang)
  await waitLocale()

  return {
    lang: params.lang
  }
}
