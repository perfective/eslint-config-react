// eslint-disable-next-line import/no-anonymous-default-export -- config file
export default {
    testEnvironment: 'node',
    rootDir: './spec',
    collectCoverage: false,
    coverageReporters: ['text'],
    coverageThreshold: {
        global: {
            statements: 100,
            branches: 100,
            functions: 100,
            lines: 100,
        },
    },
    errorOnDeprecated: true,
    verbose: false,
};
