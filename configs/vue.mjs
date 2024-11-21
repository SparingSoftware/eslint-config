import eslintPluginVue from 'eslint-plugin-vue'
import eslintPluginVueA11y from 'eslint-plugin-vuejs-accessibility'
import eslintVueTsConfig from '@vue/eslint-config-typescript'

import mainConfig from './main.mjs'

/** @type {import("eslint").Linter.Config[]}  */
export default [
  ...eslintPluginVue.configs['flat/recommended'],
  ...eslintPluginVueA11y.configs['flat/recommended'],
  ...mainConfig,
  ...eslintVueTsConfig(),
  {
    rules: {
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index']
          ],
          alphabetize: {
            order: 'asc'
          },
          'newlines-between': 'always'
        }
      ],
      '@typescript-eslint/ban-ts-comment': 'off',
      'vue/no-v-html': 'off',
      'vue/html-self-closing': [
        'warn',
        {
          html: {
            void: 'always', // prettier
            normal: 'always',
            component: 'always'
          }
        }
      ],
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/prefer-true-attribute-shorthand': ['warn', 'always'],
      'vue/component-tags-order': [
        'warn',
        {
          order: ['template', 'script', 'style']
        }
      ],
      'vue/define-props-declaration': 'warn',
      'vuejs-accessibility/anchor-has-content': [
        'error',
        {
          components: ['RouterLink']
        }
      ]
    }
  }
]
