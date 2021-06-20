import { typescriptEslintNamingConvention } from './rules/typescript-eslint';
import { unicornPreventAbbreviations } from './rules/unicorn';

/**
 * Rules defined in the @perfective/eslint-config that need to be overridden.
 */
export = {
    rules: {
        '@typescript-eslint/indent': ['warn', 4, {
            // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
            SwitchCase: 1,
            // Use 'react/jsx-indent-props' instead
            ignoredNodes: [
                'JSXAttribute',

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
