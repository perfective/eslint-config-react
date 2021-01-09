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
            ],
        }],
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
