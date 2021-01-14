module.exports = {
    testEnvironment: 'node',
    preset: 'ts-jest',
    // Prevent "jest-haste-map: Haste module naming collision" issue when package.json is copied into ./dist
    roots: ['<rootDir>/src'],
    collectCoverage: true,
    coverageReporters: ['text'],
    verbose: false,
}
