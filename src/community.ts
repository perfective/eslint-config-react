import { unicornPreventAbbreviations } from './rules/eslint-config/rules/unicorn';

export = {
    // Order of extends is critical: community config shadows all rules,
    // so overrides for @perfective/eslint-config need to be applied again.
    extends: [
        './',
        '@perfective/eslint-config/community',
        './rules/eslint-config',
    ],
    rules: {
        'react/jsx-indent-props': ['warn', 0],
        'unicorn/prevent-abbreviations': ['warn', unicornPreventAbbreviations({}, {
            checkProperties: false,
        })],
    },
};