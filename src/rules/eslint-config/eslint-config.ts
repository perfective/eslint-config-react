import { Linter } from 'eslint';

import { typescriptFiles } from '@perfective/eslint-config';

import { typescriptEslintNamingConvention } from './rules/typescript-eslint';
import { unicornPreventAbbreviations } from './rules/unicorn';

/**
 * Rules defined in the `@perfective/eslint-config` that need to be overridden.
 */
export function eslintConfig(): Linter.Config {
    return {
        files: typescriptFiles,
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
            '@typescript-eslint/naming-convention': ['error', ...typescriptEslintNamingConvention()],
            'unicorn/prevent-abbreviations': ['warn', unicornPreventAbbreviations()],
        },
    };
}
