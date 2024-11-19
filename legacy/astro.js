/** @type {import("eslint").Linter.Config}  */
module.exports = {
  extends: [
    'plugin:astro/recommended',
    'plugin:astro/jsx-a11y-recommended',
    '@sparing-software/eslint-config/legacy/main'
  ],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {
        // All rules: https://ota-meshi.github.io/eslint-plugin-astro/rules/,
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
  ],
  env: { node: true },
  globals: {
    gtag: true
  }
}
