import { Linter } from 'eslint';

import { perfectiveEslintConfig, typescriptFiles } from '@perfective/eslint-config';

import { jsxA11yConfig } from './jsx-a11y/jsx-a11y-config';
import { reactConfig } from './react/react-config';
import { reactHooksConfig } from './react-hooks/react-hooks-config';
import { reactPerfConfig } from './react-perf/react-perf-config';
import { typescriptEslintNamingConvention } from './typescript-eslint/rules/typescript-eslint';
import { unicornPreventAbbreviations } from './unicorn/rules/unicorn';

/**
 * Creates a list of flat configs.
 *
 * @since v0.17.0
 */
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
                // Conflicts with func-style inside functional components
                'prefer-arrow/prefer-arrow-functions': 'off',
            },
        },
        ...configs,
    ]);
}
