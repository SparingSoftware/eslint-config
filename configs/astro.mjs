import globals from 'globals'
import eslintPluginAstro from 'eslint-plugin-astro'

import { mainConfigAstro } from './main.mjs'

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...mainConfigAstro,
  ...eslintPluginAstro.configs['flat/recommended'],
  ...eslintPluginAstro.configs['flat/jsx-a11y-recommended'],
  {
    // It fixes `process` is not defined issues
    // https://stackoverflow.com/a/76081175
    languageOptions: {
      globals: {
        ...globals.node,
        gtag: true
      }
    }
  },
  {
    rules: {
      'astro/jsx-a11y/alt-text': [
        'error',
        {
          elements: ['img', 'object', 'area'],
          img: ['Image']
        }
      ],

      'astro/jsx-a11y/img-redundant-alt': [
        'error',
        {
          components: ['Image']
        }
      ]
    }
  }
]
