import { defineConfig, presetUno, transformerDirectives, presetIcons, presetWebFonts } from 'unocss'
import * as fs from 'node:fs/promises'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        custom: {
          cvut: () => fs.readFile('./src/icons/cvut.svg', 'utf-8'),
        }
      }
    }),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: [
          {
            name: 'Noto Sans',
            weights: [500, 700],
          },
          {
            name: 'Noto Sans Japanese',
            weights: [500, 700],
          },
        ],
        mono: ['Fira Code']
      }
    })
  ],
  transformers: [
    transformerDirectives(),
  ],
})
