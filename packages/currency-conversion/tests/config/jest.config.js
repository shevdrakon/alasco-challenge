const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '../'),
  setupFiles: [
    '../node_modules/regenerator-runtime/runtime',
    './config/jest.setup.js',
  ],
  testMatch: ['**/*.spec.js'],
  transform: {
    '^.+\\.js$': './config/jest.transform.js',
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules'],
  testPathIgnorePatterns: ['\\node_modules\\', 'config'],
  moduleNameMapper: {
    '.+\\.(css|scss|svg)$': 'identity-obj-proxy',
  },
  testURL: 'http://localhost',
};
