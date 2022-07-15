module.exports = {
  input: [
    'src/**/*.{ts,tsx}',
    // Use ! to filter out files or directories
    '!src/**/*.spec.{ts,tsx}',
    '!**/node_modules/**',
  ],
  output: './',
  options: {
    func: {
      list: ['t'],
      extensions: ['.ts', '.tsx'],
    },
    lngs: ['en', 'ru'],
    defaultLng: 'en',
    defaultValue: '__STRING_NOT_TRANSLATED__',
    resource: {
      loadPath: 'src/features/i18n/resources/{{lng}}/{{ns}}.json',
      savePath: 'src/features/i18n/resources/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
    removeUnusedKeys: true,
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
    sort: true,
  },
};
