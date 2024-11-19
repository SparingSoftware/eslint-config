/** @type {import("eslint").Linter.Config}  */
const next = {
  extends: [
    'next/core-web-vitals',
    'plugin:jsx-a11y/recommended',
    '@sparing-software/eslint-config'
  ],
  plugins: ['jsx-a11y'],
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

module.exports = next
