const defaultConfig = require('./index')

/** @type {import("eslint").Linter.Config}  */
const vue = {
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@sparing-software/eslint-config',
    '@vue/eslint-config-typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    ...defaultConfig.rules,
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
    'vue/define-props-declaration': 'warn'
  }
}

module.exports = vue
