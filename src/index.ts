import { optionalRule } from '@perfective/eslint-config/config';

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
                './rules/react-perf',
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
        {
            files: ['*.tsx', '*.jsx'],
            rules: {
                // Conflicts with func-style inside functional components
                'prefer-arrow/prefer-arrow-functions': 'off',
            },
        },
        {
            // Default extensions supported by Jest (/\.(spec|test)\.[jt]sx?$/)
            files: ['*.@(spec|test).[jt]s?(x)'],
            rules: {
                // The act() function is available only in testing-library/react
                ...optionalRule('testing-library/no-unnecessary-act', ['error', {
                    isStrict: true,
                }]),
            },
        },
    ],
};
