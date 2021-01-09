import { tslint } from '@perfective/eslint-config/tslint';

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
    rules: {
        // Legacy rules for TSLint
        '@typescript-eslint/tslint/config': ['warn', {
            rules: {
                ...tslint,
            },
        }],
        '@typescript-eslint/indent': ['warn', 4, {
            // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
            SwitchCase: 1,
            // Use 'react/jsx-indent-props' instead
            ignoredNodes: [
                'JSXAttribute',
            ],
        }],
        // TODO: Resolve duplication/override problem
        'unicorn/prevent-abbreviations': ['warn', {
            replacements: {
                prop: false,
                props: false,
                ref: false,
                refs: false,
            },
        }],
    },
};
