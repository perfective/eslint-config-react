import {
    TypescriptEslintNamingConvention,
    typescriptEslintNamingConvention as typescriptEslintNamingConventionDefaults,
} from '@perfective/eslint-config/typescript-eslint';

/**
 * Creates a React-compatible configuration with the given extensions
 * for the `@typescript-eslint/naming-convention` rule.
 */
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
        {
            selector: ['function'],
            // Allow StrictPascalCase for JSX elements
            format: ['strictCamelCase', 'StrictPascalCase'],
        } as TypescriptEslintNamingConvention,
    ].concat(extensions));
}
