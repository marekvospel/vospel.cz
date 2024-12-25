import { browser } from '$app/environment'
import { waitLocale } from 'svelte-i18n'
import { initLocale, tryLocale } from '../modules/i18n'
import type { LayoutLoad } from './$types'

initLocale()

export const load: LayoutLoad = async () => {
  if (browser) {
    for (const lang of window.navigator.languages) {
      if (tryLocale(lang))
        break;
    }
  }
  await waitLocale()
}
