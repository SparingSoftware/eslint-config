import _import from 'eslint-plugin-import'
import unicorn from 'eslint-plugin-unicorn'
import { fixupPluginRules } from '@eslint/compat'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import tsEslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

/** @type {import("eslint").Linter.Config[]}  */
export default [
  {
    ignores: ['**/dist', '**/*.cjs']
  },
  js.configs.recommended,
  ...tsEslint.configs.recommended,
  ...compat.extends('prettier'),
  {
    plugins: {
      import: fixupPluginRules(_import),
      unicorn
    },

    rules: {
      'no-restricted-syntax': [
        'warn',
        {
          selector: 'TSInterfaceDeclaration',
          message: 'Prefer using types instead of interfaces'
        }
      ],

      'arrow-body-style': ['warn', 'as-needed'],
      'spaced-comment': ['warn', 'always'],
      'no-empty': 'warn',
      'no-duplicate-imports': 'warn',

      'prefer-destructuring': [
        'warn',
        {
          object: false,
          array: true
        }
      ],

      'no-multiple-empty-lines': [
        'error',
        {
          max: 2
        }
      ],

      'object-shorthand': ['warn', 'always'],

      'import/newline-after-import': [
        'warn',
        {
          count: 1
        }
      ],

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
      ],

      'unicorn/prefer-ternary': 'warn',
      'unicorn/prefer-negative-index': 'warn',
      'unicorn/prefer-at': 'warn',
      'unicorn/prefer-switch': 'warn',
      'unicorn/switch-case-braces': ['warn', 'avoid'],
      'unicorn/consistent-destructuring': 'warn',
      'unicorn/no-useless-undefined': 'warn',
      'unicorn/expiring-todo-comments': 'warn',
      'unicorn/require-array-join-separator': 'warn'
    }
  },
  // Overrides
  {
    // Vue and Astro config have their own parserOptions implementation so we don't attach them here.
    files: ['**/*.ts', '**/*.tsx'],

    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script',
      /*
        Rule @typescript-eslint/prefer-nullish-coalescing - require parserOptions reason:
        Error while loading rule '@typescript-eslint/prefer-nullish-coalescing':
        You have used a rule which requires parserServices to be generated. 
        You must therefore provide a value for the "parserOptions.project".
      */
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: true
      }
    }
  },
  // Overrides
  {
    /* 
        I try to fix rule: '@typescript-eslint/prefer-nullish-coalescing' for Astro but I can't find any solution.
        The problem occurred when we created a new .astro file in which case eslint gave this error:
        Parsing error: "parserOptions.programs" has been provided for @typescript-eslint/parser.
        The file was not found in any of the provided program instance(s).
      */
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],

    rules: {
      '@typescript-eslint/prefer-nullish-coalescing': 'warn'
    }
  }
]
