module.exports = {
    extends: ['@perfective/eslint-config'],
    overrides: [
        {
            files: ['*.js'],
            rules: {
                'unicorn/prevent-abbreviations': 'off',
            },
        },
        {
            files: ['*.ts'],
            parserOptions: {
                project: './tsconfig.json',
            },
            settings: {
                'import/resolver': {
                    typescript: {
                        project: 'tsconfig.json',
                    },
                },
            },
            rules: {
                'unicorn/prevent-abbreviations': 'off',
            },
        },
        {
            files: ['*.spec.ts'],
            settings: {
                jest: {
                    version: 26,
                },
            },
        },
    ],
};
