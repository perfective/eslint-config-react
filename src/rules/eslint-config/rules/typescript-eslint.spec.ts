import { TypescriptEslintNamingConvention } from '@perfective/eslint-config/rules';

import { typescriptEslintNamingConvention } from './typescript-eslint';

describe(typescriptEslintNamingConvention, () => {
    it('overrides @perfective/eslint-config settings for the @typescript-eslint/naming-convention rule', () => {
        expect(typescriptEslintNamingConvention())
            .toStrictEqual([
                {
                    selector: ['enumMember', 'typeLike'],
                    format: ['StrictPascalCase'],
                },
                {
                    selector: ['memberLike', 'variableLike'],
                    format: ['strictCamelCase'],
                },
                {
                    selector: ['parameter'],
                    modifiers: ['unused'],
                    format: ['strictCamelCase'],
                    leadingUnderscore: 'allow',
                },
                {
                    selector: ['classProperty'],
                    modifiers: ['private'],
                    format: ['strictCamelCase'],
                    leadingUnderscore: 'allow',
                },
                {
                    selector: ['variable'],
                    modifiers: ['const'],
                    format: ['strictCamelCase', 'StrictPascalCase'],
                },
            ] as TypescriptEslintNamingConvention[]);
    });

    it('allows to extend config for the @typescript-eslint/naming-convention rule', () => {
        expect(typescriptEslintNamingConvention([
            {
                selector: ['function'],
                format: ['strictCamelCase', 'StrictPascalCase'],
            },
        ]))
            .toStrictEqual([
                {
                    selector: ['enumMember', 'typeLike'],
                    format: ['StrictPascalCase'],
                },
                {
                    selector: ['memberLike', 'variableLike'],
                    format: ['strictCamelCase'],
                },
                {
                    selector: ['parameter'],
                    modifiers: ['unused'],
                    format: ['strictCamelCase'],
                    leadingUnderscore: 'allow',
                },
                {
                    selector: ['classProperty'],
                    modifiers: ['private'],
                    format: ['strictCamelCase'],
                    leadingUnderscore: 'allow',
                },
                {
                    selector: ['variable'],
                    modifiers: ['const'],
                    format: ['strictCamelCase', 'StrictPascalCase'],
                },
                {
                    selector: ['function'],
                    format: ['strictCamelCase', 'StrictPascalCase'],
                },
            ] as TypescriptEslintNamingConvention[]);
    });
});
