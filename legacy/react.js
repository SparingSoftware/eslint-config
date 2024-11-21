/** @type {import("eslint").Linter.Config}  */
const react = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:jsx-a11y/recommended',
    '@sparing-software/eslint-config/legacy/main'
  ],
  plugins: ['jsx-a11y'],
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
    'spaced-comment': [1, 'always', { markers: ['/'] }],
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
        components: ['Link'],
        specialLink: ['to']
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}

module.exports = react
