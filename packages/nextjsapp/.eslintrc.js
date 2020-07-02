module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    extends: [
        'react-app',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    plugins: [
        '@typescript-eslint',
        'react',
    ],
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        'no-console': 'error',
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/array-type': ['error', { default: 'array' }],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: false
            }
        ],
        'jsx-a11y/anchor-is-valid': [
            'error', {
                'components': ['Link'],
                'specialLink': ['hrefLeft', 'hrefRight'],
                'aspects': ['invalidHref', 'preferButton']
            }
        ]
    },
    overrides: [{
        files: [
            '**/**/pages/**',
            '**/**/*stories.*',
        ],
        rules: {
            'import/no-default-export': 'off'
        }
    }]
}
