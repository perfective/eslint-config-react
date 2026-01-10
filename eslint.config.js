import { configurationFiles, jestFiles } from '@perfective/eslint-config';
import { cypressConfig } from '@perfective/eslint-config/cypress';
import { importNoExtraneousDependencies } from '@perfective/eslint-config/import';
import { jestConfig, jestTypescriptConfig } from '@perfective/eslint-config/jest';
import { jestDomConfig } from '@perfective/eslint-config/jest-dom';
import { rxjsConfig } from '@perfective/eslint-config/rxjs';
import { testingLibraryConfig } from '@perfective/eslint-config/testing-library';

import { perfectiveEslintReactConfig } from './dist/index.js';

const eslintConfig = perfectiveEslintReactConfig([
    {
        // Ignore generated tests directory.
        ignores: ['spec'],
    },
    cypressConfig,
    jestConfig,
    jestTypescriptConfig,
    jestDomConfig,
    rxjsConfig,
    testingLibraryConfig,
    {
        rules: {
            'import/no-extraneous-dependencies': ['error', importNoExtraneousDependencies({
                devDependencies: [...jestFiles, ...configurationFiles],
                peerDependencies: true,
            })],
        },
    },
]);

export default eslintConfig;
