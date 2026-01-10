import { describe, expect, it } from '@jest/globals';
import { UnicornPreventAbbreviations } from '@perfective/eslint-config/unicorn';

import { unicornPreventAbbreviations } from './unicorn';

describe(unicornPreventAbbreviations, () => {
    it('overrides @perfective/eslint-config configuration for the unicorn/prevent-abbreviations rule', () => {
        expect(unicornPreventAbbreviations())
            .toStrictEqual({
                replacements: {
                    arg: false,
                    args: false,
                    db: false,
                    doc: false,
                    docs: false,
                    dev: false,
                    env: false,
                    i: false,
                    j: false,
                    lib: false,
                    libs: false,
                    param: false,
                    params: false,
                    prop: false,
                    props: false,
                    ref: false,
                    refs: false,
                },
                extendDefaultReplacements: true,
                allowList: {},
                extendDefaultAllowList: true,
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

    it('allows to extend the unicorn/prevent-abbreviations rule', () => {
        expect(unicornPreventAbbreviations({
            dbs: false,
        }, {
            checkProperties: true,
        }))
            .toStrictEqual({
                replacements: {
                    arg: false,
                    args: false,
                    db: false,
                    dbs: false,
                    doc: false,
                    docs: false,
                    dev: false,
                    env: false,
                    i: false,
                    j: false,
                    lib: false,
                    libs: false,
                    param: false,
                    params: false,
                    prop: false,
                    props: false,
                    ref: false,
                    refs: false,
                },
                extendDefaultReplacements: true,
                allowList: {},
                extendDefaultAllowList: true,
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
});
