import { Linter } from 'eslint';

import { Glob, jestFiles } from '@perfective/eslint-config';
import { testingLibraryConfig as perfectiveTestingLibraryConfig } from '@perfective/eslint-config/testing-library';

/**
 * Creates a flat config for `eslint-plugin-testing-library` for a given list of files globs.
 *
 * @since v0.17.0
 */
export function testingLibraryConfig(files: Glob[] = jestFiles): Linter.Config {
    const config = perfectiveTestingLibraryConfig(files);
    return {
        files: config.files,
        plugins: config.plugins,
        rules: {
            ...config.rules,
            // The act() function is available only in testing-library/react
            'testing-library/no-unnecessary-act': ['error', {
                isStrict: true,
            }],
        },
    } as Linter.Config;
}
