import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import UnoCSS from '@unocss/svelte-scoped/vite'
import { transformerDirectives } from 'unocss'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
	plugins: [
    Inspect(),
    UnoCSS({
      injectReset: '@unocss/reset/tailwind.css',

      cssFileTransformers: [transformerDirectives()],
      combine: false, // TODO: disable
    }),
    sveltekit(),
  ]
})
