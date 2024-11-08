import globals from 'globals'
import parser from 'astro-eslint-parser'
import eslintPluginAstro from 'eslint-plugin-astro'

import mainConfig from './main.mjs'

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...eslintPluginAstro.configs['flat/recommended'],
  ...eslintPluginAstro.configs['flat/jsx-a11y-recommended'],
  ...mainConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        gtag: true
      }
    }
  },
  {
    files: ['**/*.astro'],

    languageOptions: {
      parser: parser,
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      }
    },

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
