'use strict';

module.exports = {
  extends: [
    '../eslint/best-practices/off',
    '../eslint/errors/off',
    '../eslint/es6/off',
    '../eslint/node/off',
    '../eslint/strict/off',
    '../eslint/stylistic/off',
    '../eslint/variables/off',
    '../filenames/off',
    '../promise/off'
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
