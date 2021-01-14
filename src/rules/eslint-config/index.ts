/**
 * Rules defined in the @perfective/eslint-config that need to be overridden.
 */
import { typescriptEslintNamingConvention } from './rules/typescript-eslint';
import { unicornPreventAbbreviations } from './rules/unicorn';

export = {
    rules: {
        '@typescript-eslint/indent': ['warn', 4, {
            // eslint-disable-next-line @typescript-eslint/naming-convention -- option name
            SwitchCase: 1,
            // Use 'react/jsx-indent-props' instead
            ignoredNodes: [
                'JSXAttribute',
            ],
        }],
        '@typescript-eslint/naming-convention': ['error', ...typescriptEslintNamingConvention()],
        'unicorn/no-keyword-prefix': ['error', {
            // "class" prefix is used in React "className"
            blacklist: [],
            checkProperties: true,
            onlyCamelCase: false,
        }],
        'unicorn/prevent-abbreviations': ['warn', unicornPreventAbbreviations()],
    },
};
