import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

import baseConfig from './main.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

/** @type {import("eslint").Linter.Config[]}  */
export default [
  ...compat.extends('next/core-web-vitals'),
  jsxA11y.flatConfigs.recommended,
  ...baseConfig,
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    plugins: {
      'jsx-a11y': eslintPluginJsxA11y
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      'react/self-closing-comp': [
        'warn',
        {
          component: true,
          html: true
        }
      ],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-curly-brace-presence': [
        'warn',
        { props: 'never', children: 'ignore' }
      ],
      'react/jsx-boolean-value': ['warn', 'never'],
      'react/jsx-no-leaked-render': 'error',
      'jsx-a11y/alt-text': [
        'error',
        {
          img: ['Image']
        }
      ],
      'jsx-a11y/img-redundant-alt': [
        'error',
        {
          components: ['Image']
        }
      ],
      'jsx-a11y/anchor-has-content': [
        'error',
        {
          components: ['Link']
        }
      ],
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link']
        }
      ]
    }
  }
]
