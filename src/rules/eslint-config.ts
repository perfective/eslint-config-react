/**
 * Rules defined in the @perfective/eslint-config that need to be overridden.
 */
import { unicornPreventAbbreviations } from '@perfective/eslint-config/rules';

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
        'unicorn/prevent-abbreviations': ['warn', unicornPreventAbbreviations({
            prop: false,
            props: false,
            ref: false,
            refs: false,
        })],
    },
};
