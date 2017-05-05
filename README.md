# eslint-config-bitovi
This package provides Bitovi's base JS .eslintrc as an extensible shared config. Because linted code is sane code, and sane code is 🔥🔥🔥.

## Installation

Install ESLint along with this configuration package and related dev dependencies:

```console
$ yarn add -D eslint-config-bitovi
```

If you're behind the times and still using NPM (but we're judging you a little bit):

```console
$ npm install --save-dev eslint-config-bitovi
```

This will install the following packages:

- `eslint`: ESLint Proper
- `eslint-plugin-import`: Linting for ES6+ import/export syntax
- `eslint-plugin-promise`: Linting for JavaScript promise best practices
- `eslint-plugin-filenames`: Linting for consistent filenames

## Using This Config

### Configurations

This package includes several different configurations you can use:

- `bitovi`: ES6 configuration
- `bitovi/off`: All ESLint rules turned off
- `bitovi/es5`: ES5 configuration
- `bitovi/es5-browser`: ES5 + Browser
- `bitovi/es5-node`: ES5 + Node
- `bitovi/es6`: ES6 configuration
- `bitovi/es6-browser`: ES6 + Browser
- `bitovi/es6-node`: ES6 + Node

In order to utilize and extend your ESLint configuration with one of these, just include it in your `extends` array:

```json
{
  "extends": [
    "bitovi"
  ],
}
```

### Using What You Want

Outside of the basic configurations, you can also include/exclude specific rule sets. Each rule set has a corresponding `on.js` and `off.js` file, respectively. These include:

- `rules/eslint/best-practices/`: ESLint Best Practices
- `rules/eslint/errors/`: ESLint Possible Errors
- `rules/eslint/es6/`: ESLint ECMAScript 6
- `rules/eslint/node/`: ESLint Node.js and CommonJS
- `rules/eslint/strict/`: ESLint Strict Mode
- `rules/eslint/stylistic/`: ESLint Stylistic Issues
- `rules/eslint/open-source/`: Bitovi Open Source Exceptions
- `rules/filenames/`: ESLint File Names Custom Configurations
- `rules/import/`: ESLint ES6+ `import` Custom Configurations
- `rules/promise/`: ESLint Promise Custom Configurations

This allows a greater amount of flexibility to cater to specific needs in your project before writing your own rules. For example, you may not wish to include Bitovi's specific filename configurations, to which you would include in your `.eslintrc` file:

```json
{
  "extends": [
    "bitovi",
    "bitovi/rules/filenames/off"
  ],
}
```

### A note for your package.json

There seems to be some issues with eslint where unless you also globally install this config and plugins, it will not run. You can get around this by calling eslint by `./node_modules/.bin/eslint`. You'll probably want to do something like:

```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint **/*.js"
  }
}
```

## Contributions

These conventions should rarely be touched. All of Bitovi's projects should follow these standards and thus any changes could cause considerable headaches across the board. Most changes and improvements to the project such as documentation, tests, etc are openly welcome; however, changes to our linting standards require a little bit more.

### Linting Changes

Everyone has an opinion, single quotes vs double quotes, tabs vs spaces, so on, and so forth. These conventions are meant to keep our code bases consistent, clean, and sane. Changes to our guidelines should be minimal and infrequent.

If you have a specific change you wish to see done to the overall linting guidelines, you should file an issue specifying:

1. The change you wish to see.
2. Your reasoning for wanting the change.
3. A passing and failing example with your change

Discussion on the Github issue will be open until there are no more comments after 24-48 hours. At which point it will be decided on. If approved, you are welcome to submit a pull request with the changes.
