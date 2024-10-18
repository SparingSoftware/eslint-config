# @sparing-software/eslint-config

## Configurations

`.eslintrc`

### Typescript

```json
{
  "extends": ["@sparing-software/eslint-config"]
}
```

### Vue 3

```json
{
  "extends": ["@sparing-software/eslint-config/vue"]
}
```

### Nuxt 3

```json
{
  "extends": ["@sparing-software/eslint-config/nuxt"]
}
```

### React

```json
{
  "extends": ["@sparing-software/eslint-config/react"]
}
```

### Next

```json
{
  "extends": ["@sparing-software/eslint-config/next"]
}
```

### React Native

```json
{
  "extends": ["@sparing-software/eslint-config/react-native"]
}
```

## Recommended Extensions

- [ESLint VSCode)](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Testing

To test it, you have to build this package using `npm run pack-windows` or `npm run pack-macos` (depending on your OS) and install it in your project using `npm i --include=dev <path to package>`.

## Releasing and versioning

Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to automatically bump major, minor and patch versions. Read more about semantic releasing in this [docs](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow).
