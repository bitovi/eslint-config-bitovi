module.exports = {
  plugins: ["promise"],
  rules: {
    // enforces the use of catch on un-returned promises.
    'catch-or-return': 0,
    // avoid wrapping values in Promise.resolve or Promise.reject when not needed.
    'no-return-wrap': 0,
    // enforce consistent param names when creating new promises.
    'param-names': 0,
    // return inside each then to create readable and reusable Promise chains.
    'always-return': 0,
    // In an ES5 environment, make sure to create a Promise constructor before using.
    'no-native': 0,
    // avoid nested .then() or .catch() statements
    'no-nesting': 0,
    // avoid using promises inside of callbacks
    'no-promise-in-callback': 0,
    // avoid calling cb() inside of a then() (use nodeify] instead)
    'no-callback-in-promise': 0,
    // avoid creating new promises outside of utility libs (use pify instead)
    'avoid-new': 0,
    // prefer await to then() for reading Promise values
    'prefer-await-to-then': 0,
    // prefer async/await to the callback pattern
    'prefer-await-to-callbacks': 0
  }
};