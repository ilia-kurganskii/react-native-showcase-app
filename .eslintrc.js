module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
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
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
