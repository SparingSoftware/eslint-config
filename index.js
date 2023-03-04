/** @type {import("eslint").Linter.Config}  */
const defaultConfig = {
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['import'],
  rules: {
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'import/newline-after-import': ['warn', { count: 1 }],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/array-type': 'warn',
    '@typescript-eslint/method-signature-style': 'warn',
    '@typescript-eslint/consistent-type-assertions': ['warn', { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter' }],
    'no-restricted-syntax': [
      'warn',
      {
        selector: 'TSEnumDeclaration',
        message: 'Prefer using union types instead of enums',
      },
      {
        selector: 'TSInterfaceDeclaration',
        message: 'Prefer using types instead of interfaces',
      },
      {
        selector: 'TSPropertySignature TSUndefinedKeyword',
        message: 'Prefer declaring property type with optional ? operator instead of undefined',
      },
    ],
  },
};

module.exports = defaultConfig;
