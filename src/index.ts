export = {
    plugins: [
        'jest-dom',
        'jsx-a11y',
        'react',
        'react-hooks',
        'testing-library',
    ],
    extends: [
        '@perfective/eslint-config',
        './rules/eslint-config',
        './rules/jest-dom',
        './rules/jsx-a11y',
        './rules/react',
        './rules/react/jsx',
        './rules/react-hooks',
        './rules/testing-library',
    ],
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
            createClass: 'createReactClass',
            pragma: 'React',
            fragment: 'Fragment',
        },
        propWrapperFunctions: [
            'exactPropTypes',
        ],
        linkComponents: [],
    },
    rules: {},
};
