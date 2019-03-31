declare module '*.spec.ts' {
  // We need this import to tell VSCode and others what is happening here.
  // So, we explicitly import jest.

  // eslint-disable-next-line jest/no-jest-import
  import 'jest'
}
