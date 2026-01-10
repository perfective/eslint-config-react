export const reactJsxRules: Record<string, unknown> = {
    'react/jsx-boolean-value': ['warn', 'always'],
    // Deprecated. Use https://eslint.style/rules/jsx/jsx-child-element-spacing.
    'react/jsx-child-element-spacing': 'off',
    // Deprecated. Use https://eslint.style/rules/jsx/jsx-closing-bracket-location.
    'react/jsx-closing-bracket-location': 'off',
    // Deprecated. Use https://eslint.style/rules/jsx/jsx-closing-tag-location.
    'react/jsx-closing-tag-location': 'off',
    // Deprecated. Use https://eslint.style/rules/jsx/jsx-curly-brace-presence.
    'react/jsx-curly-brace-presence': 'off',
    // Deprecated. Use https://eslint.style/rules/jsx/jsx-curly-newline.
    'react/jsx-curly-newline': 'off',
    // Deprecated. Use https://eslint.style/rules/jsx/jsx-curly-spacing.
    'react/jsx-curly-spacing': 'off',
    // Deprecated. Use https://eslint.style/rules/jsx/jsx-equals-spacing.
    'react/jsx-equals-spacing': 'off',
    'react/jsx-filename-extension': ['error', {
        allow: 'always',
        extensions: ['.jsx', '.tsx'],
        ignoreFilesWithoutCode: false,
    }],
    // Deprecated. Use https://eslint.style/rules/jsx/jsx-first-prop-new-line.
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-fragments': ['warn', 'element'],
    'react/jsx-handler-names': ['error', {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
        checkLocalVariables: true,
        checkInlineFunction: true,
    }],
    // Deprecated. Use https://eslint.style/rules/jsx/jsx-indent.
    'react/jsx-indent': 'off',
    // Deprecated. Use https://eslint.style/rules/jsx/jsx-indent-props.
    'react/jsx-indent-props': 'off',
    'react/jsx-key': ['error', {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
    }],
    // See the 'max-depth' rule
    'react/jsx-max-depth': ['error', {
        max: 4,
    }],
    // Deprecated. Use https://eslint.style/rules/jsx/jsx-max-props-per-line.
    'react/jsx-max-props-per-line': 'off',
    // Deprecated. Use https://eslint.style/rules/jsx/jsx-newline.
    'react/jsx-newline': 'off',
    'react/jsx-no-bind': ['error', {
        // eslint-disable-next-line @typescript-eslint/naming-convention -- configuration property
        ignoreDOMComponents: false,
        ignoreRefs: false,
        allowArrowFunctions: false,
        allowFunctions: false,
    }],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-duplicate-props': ['error', {
        ignoreCase: true,
    }],
    'react/jsx-no-leaked-render': ['warn', {
        validStrategies: ['ternary'],
    }],
    'react/jsx-no-literals': ['error', {
        noStrings: false,
        allowedStrings: [],
        ignoreProps: true,
        noAttributeStrings: false,
    }],
    'react/jsx-props-no-spread-multi': 'error',
    'react/jsx-no-script-url': ['error', {
        includeFromSettings: false,
    }],
    'react/jsx-no-target-blank': ['warn', {
        allowReferrer: false,
        enforceDynamicLinks: 'always',
        forms: true,
        links: true,
        warnOnSpreadAttributes: true,
    }],
    'react/jsx-no-undef': ['error', {
        allowGlobals: false,
    }],
    'react/jsx-no-useless-fragment': ['warn', {
        allowExpressions: true,
    }],
    // Deprecated. Use https://eslint.style/rules/jsx/jsx-one-expression-per-line.
    'react/jsx-one-expression-per-line': 'off',
    // Deprecated. Use https://eslint.style/rules/jsx/jsx-pascal-case.
    'react/jsx-pascal-case': 'off',
    // Deprecated. Use https://eslint.style/rules/jsx/jsx-props-no-multi-spaces.
    'react/jsx-props-no-multi-spaces': 'off',
    'react/jsx-props-no-spreading': ['error', {
        html: 'enforce',
        custom: 'enforce',
        explicitSpread: 'enforce',
        exceptions: [],
    }],
    // Deprecated since eslint-plugin-react v7.32.0. Use `react/sort-default-props`.
    'react/jsx-sort-default-props': 'off',
    // Deprecated. Use https://eslint.style/rules/jsx/jsx-sort-props.
    'react/jsx-sort-props': 'off',
    // Deprecated since eslint-plugin-react v7.0.0. Use `react/jsx-tag-spacing`.
    'react/jsx-space-before-closing': 'off',
    // Deprecated. Use https://eslint.style/rules/jsx/jsx-tag-spacing.
    'react/jsx-tag-spacing': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    // Deprecated. Use https://eslint.style/rules/jsx/jsx-wrap-multilines.
    'react/jsx-wrap-multilines': 'off',
};
