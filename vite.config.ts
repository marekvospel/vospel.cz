import { sveltekit } from '@sveltejs/kit/vite'
import type { UserConfig } from 'vite'

import UnoCSS from 'unocss/vite'
import { presetUno, transformerDirectives } from 'unocss'
import Icons from 'unplugin-icons/vite'

const config: UserConfig = {
  plugins: [
    sveltekit(),
    UnoCSS({
      presets: [
        presetUno(),
      ],
      transformers: [
        transformerDirectives(),
      ],
    }),
    Icons({
      autoInstall: true,
      compiler: 'svelte',
    }),
  ],
}

export default config
