import type { Handle } from '@sveltejs/kit'
import { tryLocale } from './modules/i18n'

function handleLocale(event: Parameters<Handle>[0]['event']): boolean {

  // Try to parse lang from url
  const url = new URL(event.request.url)
  if (url.searchParams.get('lang') && tryLocale(url.searchParams.get('lang')!))
    return true
  if (url.searchParams.get('locale') && tryLocale(url.searchParams.get('locale')!))
    return true

  // fallback to lang in navigator
  const langs = event.request.headers.get('accept-language')?.split(',') ?? []
  for (const lang of langs) {
    if (tryLocale(lang))
      return true
  }

  return false
}

export const handle: Handle = async ({ event, resolve }) => {
  if (!handleLocale(event))
    tryLocale('en')

  const response = await resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replace(
        '%unocss-svelte-scoped.global%',
        'unocss_svelte_scoped_global_styles'
      ),
  })
  return response
}
