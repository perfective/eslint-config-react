# Perfective ESLint Config for React

`@perfective/eslint-config-react` provides
a [shareable ESLint configuration](https://eslint.org/docs/latest/developer-guide/shareable-configs)
for developing the `@perfective` [React](https://reactjs.org) packages.
This package extends the
[`@perfective/eslint-config`](https://www.npmjs.com/package/@perfective/eslint-config) package.

`@perfective/eslint-config-react` uses the following ESLint plugins:

- [`eslint-plugin-react`](https://github.com/jsx-eslint/eslint-plugin-react);
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks);
- [`eslint-plugin-react-hooks-ssr`](https://github.com/correttojs/eslint-plugin-react-hooks-ssr);
- [`eslint-plugin-react-perf`](https://github.com/cvazac/eslint-plugin-react-perf);
- [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y).

## Setup

1. Require `@perfective/eslint-config-react` and its peer dependencies as dev dependencies:

```bash
npm install --save-dev \
    @perfective/eslint-config-react \
    @babel/eslint-parser \
    @typescript-eslint/eslint-plugin \
    @typescript-eslint/parser \
    eslint \
    eslint-import-resolver-typescript \
    eslint-plugin-array-func \
    eslint-plugin-cypress \
    eslint-plugin-eslint-comments \
    eslint-plugin-import \
    eslint-plugin-jest \
    eslint-plugin-jest-dom \
    eslint-plugin-jsdoc \
    eslint-plugin-jsx-a11y \
    eslint-plugin-n \
    eslint-plugin-node \
    eslint-plugin-prefer-arrow \
    eslint-plugin-promise \
    eslint-plugin-react \
    eslint-plugin-react-hooks \
    eslint-plugin-react-hooks-ssr \
    eslint-plugin-react-perf \
    eslint-plugin-rxjs \
    eslint-plugin-simple-import-sort \
    eslint-plugin-sonarjs \
    eslint-plugin-testing-library \
    eslint-plugin-unicorn
```

2. Require the configuration in your root `.eslintrc.js`.

```javascript
module.exports = {
    extends: ['@perfective/eslint-config-react'],
};
```

3. Configure your `.eslintignore` file.
