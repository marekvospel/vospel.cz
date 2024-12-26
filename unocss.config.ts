import { defineConfig, presetUno, transformerDirectives, presetIcons } from 'unocss'
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
  ],
  transformers: [
    transformerDirectives(),
  ],
})
