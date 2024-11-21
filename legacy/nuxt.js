const nuxtEslintConfig = require('@nuxt/eslint-config')

/** @type {import("eslint").Linter.Config}  */
const nuxt = {
  extends: [
    '@nuxt/eslint-config',
    '@sparing-software/eslint-config/legacy/vue'
  ],
  overrides: [...nuxtEslintConfig.overrides],
  rules: {
    'vuejs-accessibility/alt-text': [
      'error',
      {
        img: ['NuxtImg', 'NuxtPicture']
      }
    ],
    'vuejs-accessibility/anchor-has-content': [
      'error',
      {
        components: ['RouterLink', 'NuxtLink']
      }
    ]
  }
}

module.exports = nuxt
