module.exports = {
    testEnvironment: 'jsdom', // Use jsdom for simulating the browser environment
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // Extends expect for better assertions
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Use babel-jest for JS/JSX files
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'], // Allow these file extensions
    testMatch: [
      '**/src/test/**/*.{test,spec}.{js,jsx,ts,tsx}', // Match test files inside the src/test folder
    ],
  };
  