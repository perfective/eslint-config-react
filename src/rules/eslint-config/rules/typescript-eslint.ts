import {
    TypescriptEslintNamingConvention,
    typescriptEslintNamingConvention as typescriptEslintNamingConventionDefaults,
} from '@perfective/eslint-config/rules';

export function typescriptEslintNamingConvention(
    extensions: TypescriptEslintNamingConvention[] = [],
): TypescriptEslintNamingConvention[] {
    return typescriptEslintNamingConventionDefaults([
        {
            selector: ['variable'],
            modifiers: ['const'],
            // Allow StrictPascalCase for elements created with React.createContext()
            format: ['strictCamelCase', 'StrictPascalCase'],
        } as TypescriptEslintNamingConvention,
    ].concat(extensions));
}
