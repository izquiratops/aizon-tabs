export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: { '\\.(css)$': '<rootDir>/src/test/mocks/style.ts' },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
