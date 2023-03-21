const nuxtEslintConfig = require('@nuxt/eslint-config')

/** @type {import("eslint").Linter.Config}  */
const nuxt = {
  extends: ['@nuxt/eslint-config', '@sparing-software/eslint-config/vue'],
  overrides: [...nuxtEslintConfig.overrides]
}

module.exports = nuxt
