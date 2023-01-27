/** @type {import("eslint").Linter.Config}  */
const defaultConfig = {
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['import'],
  rules: {
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'import/newline-after-import': ['warn', { count: 1 }],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-shadow': ['warn'],
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
};

module.exports = defaultConfig;
