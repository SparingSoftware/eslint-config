/** @type {import("eslint").Linter.Config}  */
const react = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    '@sparing-software/eslint-config'
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
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
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@/modules/*/*']
      }
    ],
    'react/prop-types': [0],
    'spaced-comment': [1, 'always', { markers: ['/'] }]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}

module.exports = react
