export = {
    extends: [
        '@perfective/eslint-config',
    ],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
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
            extends: [
                './rules/eslint-config',
                './rules/jsx-a11y',
                './rules/react',
                './rules/react-hooks',
            ],
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
        },
    ],
};
