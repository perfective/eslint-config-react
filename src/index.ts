import { Linter } from 'eslint';

import { jestFiles, perfectiveEslintConfig, typescriptFiles } from '@perfective/eslint-config';

import { jsxA11yConfig } from './config/jsx-a11y/jsx-a11y-config';
import { reactConfig } from './config/react/react-config';
import { reactHooksConfig } from './config/react-hooks/react-hooks-config';
import { reactPerfConfig } from './config/react-perf/react-perf-config';
import { typescriptEslintNamingConvention } from './rules/eslint-config/rules/typescript-eslint';
import { unicornPreventAbbreviations } from './rules/eslint-config/rules/unicorn';

export function perfectiveEslintReactConfig(configs: Linter.Config[] = []): Linter.Config[] {
    return perfectiveEslintConfig([
        jsxA11yConfig,
        reactConfig,
        reactHooksConfig,
        reactPerfConfig,
        {
            rules: {
                '@stylistic/indent': ['warn', 4, {
                    // TODO: Research more options using https://astexplorer.net
                    // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
                    SwitchCase: 1,
                    ignoredNodes: [

                        /**
                         * @workaround https://github.com/typescript-eslint/typescript-eslint/issues/455#issuecomment-580636221
                         */
                        'TSTypeParameterInstantiation',
                    ],
                }],
                'unicorn/prevent-abbreviations': ['warn', unicornPreventAbbreviations()],
            },
        },
        {
            files: typescriptFiles,
            rules: {
                '@typescript-eslint/naming-convention': ['error', ...typescriptEslintNamingConvention()],
            },
        },
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
