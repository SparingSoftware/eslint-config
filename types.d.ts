type Config = import('eslint').Linter.Config[]

type LegacyConfig = import('eslint').Linter.Config

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

declare module '@sparing-software/eslint-config/vue' {
  export default Config
}

// Legacy configs

declare module '@sparing-software/eslint-config/legacy/astro' {
  export default LegacyConfig
}

declare module '@sparing-software/eslint-config/legacy/main' {
  export default LegacyConfig
}

declare module '@sparing-software/eslint-config/legacy/next' {
  export default LegacyConfig
}

declare module '@sparing-software/eslint-config/legacy/next' {
  export default LegacyConfig
}

declare module '@sparing-software/eslint-config/legacy/nuxt' {
  export default LegacyConfig
}

declare module '@sparing-software/eslint-config/legacy/react-native' {
  export default LegacyConfig
}

declare module '@sparing-software/eslint-config/legacy/react' {
  export default LegacyConfig
}

declare module '@sparing-software/eslint-config/legacy/vue' {
  export default LegacyConfig
}
