# Perfective ESLint Config for React

`@perfective/eslint-config-react` provides
a [shareable ESLint configuration](https://eslint.org/docs/latest/developer-guide/shareable-configs)
for [React](https://reactjs.org) development.

`@perfective/eslint-config-react` adds the following ESLint plugins to the
[`@perfective/eslint-config`](https://www.npmjs.com/package/@perfective/eslint-config) configuration:

- [`eslint-plugin-react`](https://github.com/jsx-eslint/eslint-plugin-react);
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks);
- [`eslint-plugin-react-perf`](https://github.com/cvazac/eslint-plugin-react-perf);
- [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y).

## Setup

1. Require `@perfective/eslint-config-react`:

    ```bash
    npm install --save-dev @perfective/eslint-config-react
    ```

    Required peer dependencies are installed automatically.

2. Import `perfectiveEslintReactConfig` to `eslint.config.js`:

    ```javascript
    import { perfectiveEslintReactConfig } from '@perfective/eslint-config-react';

    export default perfectiveEslintReactConfig();
    ```

3. _Optional_ Install optional peer dependencies to add tool-specific linting rules.

    ```bash
    npm install --save-dev \
    eslint-plugin-cypress \
    eslint-plugin-jest \
    eslint-plugin-jest-dom \
    eslint-plugin-rxjs-x \
    eslint-plugin-testing-library
    ```

    Import configurations to `eslint.config.js`.

    ```javascript
    import { perfectiveEslintReactConfig } from '@perfective/eslint-config-react';

    // Optional dependencies.
    import { cypressConfig } from '@perfective/eslint-config/cypress';
    import { jestConfig, jestTypescriptConfig } from '@perfective/eslint-config/jest';
    import { jestDomConfig } from '@perfective/eslint-config/jest-dom';
    import { rxjsConfig } from '@perfective/eslint-config/rxjs';
    import { testingLibraryConfig } from '@perfective/eslint-config-react/testing-library';

    export default perfectiveEslintReactConfig([
        cypressConfig,
        jestConfig,
        jestTypescriptConfig,
        jestDomConfig,
        rxjsConfig,
        testingLibraryConfig,
    ]);
    ```

    > **Note:** `*.d.ts` files and `dist` directories are ignored by the configuration.
    > `node_modules` and dot-files are ignored by the `eslint`.
    > If more directories or file types need to be ignored, see the
    > [`.eslintignore` file](https://eslint.org/docs/latest/use/configure/ignore#the-eslintignore-file) docs.

Read the [full documentation](https://github.com/perfective/estlint-config-react/blob/main/README.adoc)
in the repository.
