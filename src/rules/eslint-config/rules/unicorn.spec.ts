import { UnicornPreventAbbreviations } from '@perfective/eslint-config/rules';

import { unicornPreventAbbreviations } from './unicorn';

describe(unicornPreventAbbreviations, () => {
    it('overrides @perfective/eslint-config configuration for the unicorn/prevent-abbreviations rule', () => {
        expect(unicornPreventAbbreviations())
            .toStrictEqual({
                replacements: {
                    args: false,
                    db: false,
                    e2e: false,
                    env: false,
                    i: false,
                    j: false,
                    params: false,
                    prop: false,
                    props: false,
                    ref: false,
                    refs: false,
                },
                extendDefaultReplacements: true,
                whitelist: {},
                extendDefaultWhitelist: true,
                checkDefaultAndNamespaceImports: 'internal',
                checkShorthandImports: 'internal',
                checkShorthandProperties: false,
                checkProperties: true,
                checkVariables: true,
                checkFilenames: true,
                ignore: [
                    /e2e/u,
                ],
            } as UnicornPreventAbbreviations);
    });

    it('allows to extend the unicorn/prevent-abbreviations rule', () => {
        expect(unicornPreventAbbreviations({
            arg: false,
        }, {
            checkProperties: false,
        }))
            .toStrictEqual({
                replacements: {
                    arg: false,
                    args: false,
                    db: false,
                    e2e: false,
                    env: false,
                    i: false,
                    j: false,
                    params: false,
                    prop: false,
                    props: false,
                    ref: false,
                    refs: false,
                },
                extendDefaultReplacements: true,
                whitelist: {},
                extendDefaultWhitelist: true,
                checkDefaultAndNamespaceImports: 'internal',
                checkShorthandImports: 'internal',
                checkShorthandProperties: false,
                checkProperties: false,
                checkVariables: true,
                checkFilenames: true,
                ignore: [
                    /e2e/u,
                ],
            } as UnicornPreventAbbreviations);
    });
});
