module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
    'plugin:i18next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'i18next', 'jest'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'react/boolean-prop-naming': ['error'],
        'react/jsx-sort-props': [
          'error',
          {
            callbacksLast: false,
            shorthandFirst: true,
            multiline: 'last',
            noSortAlphabetically: false,
            reservedFirst: true,
          },
        ],
        'import/order': [
          'error',
          {
            'groups': [
              ['builtin', 'external', 'internal', 'unknown'],
              ['parent', 'sibling', 'index', 'object'],
              'type',
            ],
            'pathGroups': [
              {
                pattern: '~features/**',
                group: 'external',
                position: 'after',
              },
            ],
            'alphabetize': {
              order: 'asc',
              caseInsensitive: true,
            },
            'newlines-between': 'always',
          },
        ],
        'i18next/no-literal-string': [
          'error',
          {
            'mode': 'jsx-only',
            'jsx-components': {
              include: ['Button', 'Text'],
              exclude: ['Trans'],
            },
            'jsx-attributes': {
              include: ['title'],
              exclude: [],
            },
          },
        ],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
