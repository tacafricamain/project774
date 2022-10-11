// module.exports = {
//     setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
//     testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
//   };

  const nextJest = require('next/jest')

  const createJestConfig = nextJest({
    dir: './',
  })
  
  const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
  }
  
  module.exports = createJestConfig(customJestConfig)