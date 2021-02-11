# Perfective ESLint Config for React

`@perfective/eslint-config-react` provides
a [shareable ESLint configuration](https://eslint.org/docs/developer-guide/shareable-configs)
that is used for the development of the `@perfective` [React](https://reactjs.org) packages.
This package extends the
[`@perfective/eslint-config`](https://www.npmjs.com/package/@perfective/eslint-config) package.

`@perfective/eslint-config-react` uses the following ESLint plugins:

* [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react);
* [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks);
* [`eslint-plugin-react-hooks-ssr`](https://github.com/correttojs/eslint-plugin-react-hooks-ssr);
* [`eslint-plugin-react-perf`](https://github.com/cvazac/eslint-plugin-react-perf);
* [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y).


## Setup

1. Require `@perfective/eslint-config-react` and its peer dependencies as dev dependencies:

```bash
npm install --save-dev \
    @perfective/eslint-config-react \
    @typescript-eslint/eslint-plugin \
    @typescript-eslint/eslint-plugin-tslint \
    @typescript-eslint/parser \
    eslint \
    eslint-import-resolver-typescript \
    eslint-plugin-array-func \
    eslint-plugin-cypress \
    eslint-plugin-deprecation \
    eslint-plugin-eslint-comments \
    eslint-plugin-import \
    eslint-plugin-jest \
    eslint-plugin-jest-dom \
    eslint-plugin-jest-formatting \
    eslint-plugin-jsdoc \
    eslint-plugin-jsx-a11y \
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
    eslint-plugin-unicorn \
    tslint
```

2. Require the configuration in your root `.eslintrc.js` or `.eslintrc.json`.
```js
module.exports = {
    extends: ['@perfective/eslint-config-react'],
}
```

3. Configure your `.eslintignore` file.

## Roadmap

* Research more ESLint React plugins:
    * [`eslint-plugin-react-redux`](https://github.com/DianaSuvorova/eslint-plugin-react-redux);
    * [`eslint-plugin-react-rxjs`](https://www.npmjs.com/package/eslint-plugin-react-rxjs).

Read the [full documentation](https://github.com/perfective/estlint-config-react/blob/master/README.adoc)
in the repository.
