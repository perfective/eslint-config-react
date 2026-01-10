import gulp from 'gulp';

import * as perfectiveGulp from '@perfective/build/gulp';

function packageJsonContent(name) {
    return {
        name: `@perfective/eslint-config-angular/${name}`,
        type: 'module',
        module: `../config/${name}/index.js`,
        types: `../config/${name}/index.d.ts`,
        exports: {
            '.': {
                types: `../config/${name}/index.d.ts`,
                import: `../config/${name}/index.js`,
            },
        },
        sideEffects: false,
    };
}

export const clean = perfectiveGulp.clean(['./dist', '*.tsbuildinfo']);
export const docs = perfectiveGulp.asciidoctor();

export const spec = gulp.series(
    perfectiveGulp.clean(['./spec', '*.tsbuildinfo']),
    perfectiveGulp.typescript.esmBuild({
        config: './tsconfig.spec.json',
        output: './spec',
    }),
);

const full = gulp.series(
    clean,
    perfectiveGulp.typescript.esmBuild(),
    perfectiveGulp.typescript.tsDeclarations(),
    perfectiveGulp.packageJson.packageJson({
        // CommonJS is not supported
        main: undefined,
        module: './index.js',
        types: './index.d.ts',
        directories: {
            lib: './',
        },
        files: [
            '**/package.json',
            '**/*.js',
            '**/*.d.ts',
        ],
    }, {}, {
        // Each optional plugin configuration must be in a separate export,
        // so it does not fail when the peer dependency is not installed.
        './typescript-eslint': {
            import: './config/typescript-eslint/index.js',
            types: './config/typescript-eslint/index.d.ts',
        },
    }),
    perfectiveGulp.file.createJsonFile(
        './dist/typescript-eslint/package.json',
        packageJsonContent('typescript-eslint'),
    ),
    perfectiveGulp.copy([
        './LICENSE*',
        './CHANGELOG*',
        './README*',
        './src/**/package.json',
    ], './dist'),
    docs,
);

export default full;
