/** @type {import("eslint").Linter.Config}  */
const reactNative = {
  extends: ['@react-native', '@sparing-software/eslint-config'],
  plugins: ['import'],
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  },
  rules: {
    'no-shadow': 'off',
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
        pathGroups: [
          {
            pattern: '@/styles/**',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before'
          }
        ],
        'newlines-between': 'always'
      }
    ],
    '@typescript-eslint/no-var-requires': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-curly-brace-presence': [
      'warn',
      { props: 'never', children: 'ignore' }
    ],
    'react/jsx-boolean-value': ['warn', 'never'],
    'react/jsx-no-leaked-render': 'error'
  }
}

module.exports = reactNative
