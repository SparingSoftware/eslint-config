type Config = import('eslint').Linter.Config[]

declare module '@sparing-software/eslint-config' {
  export default Config
}

declare module '@sparing-software/eslint-config/react' {
  export default Config
}

declare module '@sparing-software/eslint-config/astro' {
  export default Config
}

declare module '@sparing-software/eslint-config/next' {
  export default Config
}
