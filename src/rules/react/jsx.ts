export = {
    rules: {
        'react/jsx-boolean-value': ['warn', 'always'],
        'react/jsx-child-element-spacing': 'error',
        'react/jsx-closing-bracket-location': ['warn', {
            selfClosing: 'after-props',
            nonEmpty: 'after-props',
        }],
        'react/jsx-closing-tag-location': 'warn',
        // See the react/jsx-no-comment-textnodes and react/jsx-no-literals rules
        'react/jsx-curly-brace-presence': ['warn', {
            props: 'never',
            children: 'always',
            propElementValues: 'always',
        }],
        'react/jsx-curly-newline': ['warn', 'never'],
        'react/jsx-curly-spacing': ['warn', {
            when: 'never',
            attributes: {
                allowMultiline: false,
            },
            children: {
                allowMultiline: false,
            },
        }],
        'react/jsx-equals-spacing': ['warn', 'never'],
        'react/jsx-filename-extension': ['error', {
            allow: 'always',
            extensions: ['.jsx', '.tsx'],
        }],
        'react/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
        'react/jsx-fragments': ['warn', 'element'],
        'react/jsx-handler-names': ['error', {
            eventHandlerPrefix: 'handle',
            eventHandlerPropPrefix: 'on',
            checkLocalVariables: true,
            checkInlineFunction: true,
        }],
        // See the 'indent' and '@typescript-eslint/indent' rules
        'react/jsx-indent': ['warn', 4, {
            checkAttributes: true,
            indentLogicalExpressions: true,
        }],
        'react/jsx-indent-props': ['warn', {
            indentMode: 1,
            ignoreTernaryOperator: false,
        }],
        'react/jsx-key': ['error', {
            checkFragmentShorthand: true,
            checkKeyMustBeforeSpread: true,
            warnDuplicates: true,
        }],
        // See the 'max-depth' rule
        'react/jsx-max-depth': ['error', {
            max: 4,
        }],
        'react/jsx-max-props-per-line': ['warn', {
            maximum: 1,
            when: 'always',
        }],
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
        'react/jsx-no-script-url': 'error',
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
        'react/jsx-one-expression-per-line': ['warn', {
            allow: 'single-child',
        }],
        'react/jsx-pascal-case': ['error', {
            allowAllCaps: false,
            allowLeadingUnderscore: false,
            allowNamespace: false,
            ignore: [],
        }],
        'react/jsx-props-no-multi-spaces': 'warn',
        'react/jsx-props-no-spreading': ['error', {
            html: 'enforce',
            custom: 'enforce',
            explicitSpread: 'enforce',
            exceptions: [],
        }],
        'react/jsx-sort-default-props': ['error', {
            ignoreCase: false,
        }],
        'react/jsx-sort-props': ['warn', {
            ignoreCase: false,
            callbacksLast: true,
            shorthandFirst: true,
            shorthandLast: false,
            multiline: 'ignore',
            noSortAlphabetically: false,
            reservedFirst: true,
            locale: 'auto',
        }],

        /** @deprecated */
        'react/jsx-space-before-closing': 'off',
        'react/jsx-tag-spacing': ['warn', {
            closingSlash: 'never',
            beforeSelfClosing: 'always',
            afterOpening: 'never',
            beforeClosing: 'never',
        }],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-wrap-multilines': ['warn', {
            declaration: 'parens-new-line',
            assignment: 'parens-new-line',
            return: 'parens-new-line',
            arrow: 'parens-new-line',
            condition: 'parens-new-line',
            logical: 'parens-new-line',
            prop: 'parens-new-line',
        }],
    },
};
