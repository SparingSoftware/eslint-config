/** @type {import("eslint").Linter.Config}  */
module.exports = {
  extends: ['plugin:astro/recommended', '@sparing-software/eslint-config'],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {
        // All rules: https://ota-meshi.github.io/eslint-plugin-astro/rules/
      }
    }
  ],
  env: { node: true },
  globals: {
    gtag: true
  }
}
