'use strict';

module.exports = {
  extends: [
    'bitovi/rules/eslint/best-practices/on',
    'bitovi/rules/eslint/errors/on',
    'bitovi/rules/eslint/node/off',
    'bitovi/rules/eslint/strict/on',
    'bitovi/rules/eslint/stylistic/on',
    'bitovi/rules/eslint/variables/on',
    'bitovi/rules/filenames/on',
    'bitovi/rules/promise/on'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'script',
    ecmaFeatures: {

    }
  },
  env: {
    amd: true
  },
  globals: {

  },
  rules: {

  }
};
