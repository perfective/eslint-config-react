module.exports = {
    extends: ['@perfective/eslint-config'],
    parserOptions: {
        project: './tsconfig.json',
    },
    settings: {
        'import/resolver': {
            typescript: {
                project: 'tsconfig.json',
            },
        },
        'jest': {
            version: 26,
        },
    },
    overrides: [
        {
            files: ['*.ts'],
            rules: {
                'unicorn/prevent-abbreviations': 'off',
            }
        }
    ],
};
