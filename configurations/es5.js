module.exports = {
  extends: [
    '../eslint/best-practices/on',
    '../eslint/errors/on',
    '../eslint/es6/on',
    '../eslint/node/on',
    '../eslint/strict/on',
    '../eslint/stylistic/on',
    '../eslint/variables/on',
  ],
  parser: "babel-eslint", 
  parserOptions: {
    ecmaVersion: 5,
    sourceType: "script",
    ecmaFeatures: { }
  },
  env: { },
  globals: { },
  rules: { }
};