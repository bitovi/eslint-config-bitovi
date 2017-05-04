'use strict';

module.exports = {
  extends: [
    'bitovi/configurations/es5',
    'bitovi/rules/rules/eslint/es6/on',
    'bitovi/rules/rules/import/on',
    'bitovi/rules/rules/promise/on'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {impliedStrict: true}
  },
  env: {es6: true},
  globals: {},
  rules: {}
};
