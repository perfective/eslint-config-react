import { Linter } from 'eslint';
import { configs } from 'eslint-plugin-react-hooks';

import { javascriptFiles, typescriptFiles } from '@perfective/eslint-config';

export function reactHooksConfig(): Linter.Config {
    return {
        files: [...javascriptFiles, ...typescriptFiles],
        plugins: {
            'react-hooks': configs['recommended-latest'].plugins['react-hooks'],
        },
        rules: {
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
        },
    };
}
