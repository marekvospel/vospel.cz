import { browser } from '$app/environment'
import { waitLocale } from 'svelte-i18n'
import { initLocale, tryLocale } from '../modules/i18n'
import type { LayoutLoad } from './$types'

initLocale()

function loadLocale(): boolean {
  // URL locale
  const params = new URLSearchParams(window.location.search)
  if (params.get('lang') && tryLocale(params.get('lang')!)) {
    localStorage.setItem('locale', params.get('lang')!)
    return true
  }
  if (params.get('locale') && tryLocale(params.get('locale')!)) {
    localStorage.setItem('locale', params.get('locale')!)
    return true
  }

  // If local storage locale exists
  const storageLocale = window.localStorage.getItem('locale')
  if (storageLocale && tryLocale(storageLocale))
    return true

  // Try navigator language
  for (const lang of window.navigator.languages) {
    if (tryLocale(lang))
      return true
  }

  return false
}

export const load: LayoutLoad = async () => {
  if (browser && !loadLocale()) 
    tryLocale('en')
    
  await waitLocale()
}
