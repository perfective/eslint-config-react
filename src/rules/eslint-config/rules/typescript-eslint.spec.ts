import { describe, expect, it } from '@jest/globals';
import { TypescriptEslintNamingConvention } from '@perfective/eslint-config/typescript-eslint';

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
                    selector: ['objectLiteralProperty'],
                    modifiers: ['requiresQuotes'],
                    format: null,
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

    it('allows to extend config for the @typescript-eslint/naming-convention rule', () => {
        expect(typescriptEslintNamingConvention([
            {
                selector: ['interface'],
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
                    selector: ['objectLiteralProperty'],
                    modifiers: ['requiresQuotes'],
                    format: null,
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
                {
                    selector: ['interface'],
                    format: ['strictCamelCase', 'StrictPascalCase'],
                },
            ] as TypescriptEslintNamingConvention[]);
    });
});
