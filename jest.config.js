module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>/jest.setup.js',
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'jsx'],
  coveragePathIgnorePatterns: ['<rootDir>/jest.setup.js', '<rootDir>/node_modules/'],
};
