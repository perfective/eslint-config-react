import { Linter } from 'eslint';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

import { javascriptFiles, typescriptFiles } from '@perfective/eslint-config';

export function reactHooksConfig(): Linter.Config {
    return {
        files: [...javascriptFiles, ...typescriptFiles],
        plugins: {
            'react-hooks': reactHooksPlugin,
        },
        rules: {
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'error',
            // Compiler hooks
            // React Compiler rules
            'react-hooks/component-hook-factories': 'error',
            'react-hooks/config': 'error',
            'react-hooks/error-boundaries': 'error',
            'react-hooks/gating': 'error',
            'react-hooks/globals': 'error',
            'react-hooks/immutability': 'error',
            'react-hooks/incompatible-library': 'error',
            'react-hooks/preserve-manual-memoization': 'error',
            'react-hooks/purity': 'error',
            'react-hooks/refs': 'error',
            'react-hooks/set-state-in-effect': 'error',
            'react-hooks/set-state-in-render': 'error',
            'react-hooks/static-components': 'error',
            'react-hooks/unsupported-syntax': 'error',
            'react-hooks/use-memo': 'error',
        },
    } as Linter.Config;
}
