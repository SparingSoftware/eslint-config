/** @type {import("eslint").Linter.Config}  */
const defaultConfig = {
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['import', 'unicorn'],
  rules: {
    'no-restricted-syntax': [
      'warn',
      {
        selector: 'TSEnumDeclaration',
        message: 'Prefer using union types instead of enums'
      },
      {
        selector: 'TSInterfaceDeclaration',
        message: 'Prefer using types instead of interfaces'
      },
      {
        selector: 'TSPropertySignature TSUndefinedKeyword',
        message:
          'Prefer declaring property type with optional ? operator instead of undefined'
      }
    ],
    'arrow-body-style': ['warn', 'as-needed'],
    'spaced-comment': ['warn', 'always'],
    'no-empty': 'warn',
    'no-duplicate-imports': 'warn',
    'prefer-destructuring': ['warn', { object: false, array: true }],
    'max-params': ['warn', { max: 2 }],
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'object-shorthand': ['warn', 'always'],
    'unicorn/prefer-ternary': 'warn',
    'import/newline-after-import': ['warn', { count: 1 }],
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
            pattern: '@/**',
            group: 'internal',
            position: 'before'
          }
        ],
        'newlines-between': 'always'
      }
    ],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/array-type': 'warn',
    '@typescript-eslint/method-signature-style': 'warn',
    '@typescript-eslint/consistent-type-assertions': [
      'warn',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter'
      }
    ]
  }
}

module.exports = defaultConfig
