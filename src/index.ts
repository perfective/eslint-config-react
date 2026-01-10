import { Linter } from 'eslint';

import { jestFiles, perfectiveEslintConfig, typescriptFiles } from '@perfective/eslint-config';

import { eslintConfig } from './rules/eslint-config/eslint-config';
import { jsxA11yConfig } from './rules/jsx-a11y/jsx-a11y-config';
import { reactConfig } from './rules/react/react-config';
import { reactHooksConfig } from './rules/react-hooks/react-hooks-config';
import { reactPerfConfig } from './rules/react-perf/react-perf-config';

export function perfectiveEslintReactConfig(configs: Linter.Config[] = []): Linter.Config[] {
    return perfectiveEslintConfig([
        jsxA11yConfig,
        reactConfig,
        reactHooksConfig,
        reactPerfConfig,
        eslintConfig,
        {
            files: typescriptFiles,
            // Review
            // env: {
            //     browser: true,
            //     commonjs: true,
            //     es6: true,
            //     jest: true,
            //     node: true,
            // },
            // parserOptions: {
            //     ecmaVersion: 2018,
            //     sourceType: 'module',
            //     ecmaFeatures: {
            //         jsx: true,
            //     },
            // },
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
            files: typescriptFiles,
            rules: {
                // Conflicts with func-style inside functional components
                'prefer-arrow/prefer-arrow-functions': 'off',
            },
        },
        {
            // Default extensions supported by Jest (/\.(spec|test)\.[jt]sx?$/)
            files: jestFiles,
            rules: {
                // The act() function is available only in testing-library/react
                // ...optionalRule('testing-library/no-unnecessary-act', ['error', {
                //     isStrict: true,
                // }]),
            },
        },
        ...configs,
    ]);
}
