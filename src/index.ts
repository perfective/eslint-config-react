export = {
    plugins: [
        'jsx-a11y',
        'react',
        'react-hooks',
    ],
    extends: [
        '@perfective/eslint-config',
        './rules/eslint-config',
        './rules/jsx-a11y',
        './rules/react',
        './rules/react/jsx',
        './rules/react-hooks',
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
