module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: [],
  // add your custom rules here
  //it is base on https://github.com/vuejs/eslint-config-vue
  rules: {},
};
