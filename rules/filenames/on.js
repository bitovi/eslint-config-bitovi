'use strict';

module.exports = {
  plugins: ['filenames'],
  rules: {
    // enforce dash-cased filenames
    'filenames/match-regex': 0,
    // match the file name against the default exported value in the module
    'filenames/match-exported': 0,
    // don't allow index.js files
    'filenames/no-index': 0
  }
};
