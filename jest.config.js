module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_module', '/.next'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
