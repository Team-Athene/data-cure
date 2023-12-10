import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { presetAnu, presetIconExtraProperties } from 'anu-vue'
import { presetThemeDefault } from '@anu-vue/preset-theme-default'

export default defineConfig({
  shortcuts: [
    // ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer !outline-none hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['btn', 'text-sm px-8 py-3 flex justify-center items-center cursor-pointer rounded-3xl  active:translate-y-[2px] active:shadow-none transition-all disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      extraProperties: presetIconExtraProperties,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
        tsukimi: 'Tsukimi Rounded',
        poppins: 'Poppins',
      },
    }),
    // anu-vue preset
    presetAnu(),

    // default theme preset
    presetThemeDefault(),
  ],
  content: {
    pipeline: {
      include: [/.*\/anu-vue\.js(.*)?$/, './**/*.vue'],
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose m-auto text-left'.split(' '),
  theme: {
    colors: {
      primary: '#00B2B3',
      secondary: '#DDDDDD',
      primary_font: '#0A244C',
      header_bg_primary: '#DEF3EB',
      header_bg_secondary: '#F8FFFF7A',
    },
  },
})
