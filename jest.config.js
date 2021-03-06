module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_module', '/.next'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
