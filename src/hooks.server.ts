import type { Handle } from '@sveltejs/kit'
import { tryLocale } from './modules/i18n'

export const handle: Handle = async ({ event, resolve }) => {
  const langs = event.request.headers.get('accept-language')?.split(',') ?? []
  for (const lang of langs) {
    if (tryLocale(lang))
      break;
  }

  const response = await resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replace(
        '%unocss-svelte-scoped.global%',
        'unocss_svelte_scoped_global_styles'
      ),
  })
  return response
}
