'use strict';

module.exports = {
  extends: [
    'bitovi/rules/eslint/best-practices/off',
    'bitovi/rules/eslint/errors/off',
    'bitovi/rules/eslint/es6/off',
    'bitovi/rules/eslint/node/off',
    'bitovi/rules/eslint/strict/off',
    'bitovi/rules/eslint/stylistic/off',
    'bitovi/rules/eslint/variables/off',
    'bitovi/rules/filenames/off',
    'bitovi/rules/promise/off',
    'bitovi/rules/import/off'
  ],
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'script',
    ecmaFeatures: { }
  },
  env: { },
  globals: { },
  rules: { }
};
