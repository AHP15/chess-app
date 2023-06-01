// jest.config.js
module.exports = {
  testMatch: [    // Include all test files ending with ".test.js"
    '**/*.test.js',
    '**/*.test.ts',
    '!**/dist/*.js',   // Exclude any files inside the "dist" directory // Exclude a specific file
  ],
};
