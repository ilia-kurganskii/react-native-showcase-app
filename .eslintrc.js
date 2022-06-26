module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
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
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
