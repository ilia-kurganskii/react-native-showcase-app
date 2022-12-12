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
    trans: {
      component: 'Trans',
      i18nKey: 'i18nKey',
      defaultsKey: 'defaults',
      extensions: ['.tsx'],
      fallbackKey: function (ns, value) {
        return value;
      },

      // https://react.i18next.com/latest/trans-component#usage-with-simple-html-elements-like-less-than-br-greater-than-and-others-v10.4.0
      supportBasicHtmlNodes: false, // Enables keeping the name of simple nodes (e.g. <br/>) in translations instead of indexed keys.

      // https://github.com/acornjs/acorn/tree/master/acorn#interface
      acorn: {
        ecmaVersion: 2020,
        sourceType: 'module', // defaults to 'module'
      },
    },
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
