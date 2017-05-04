# eslint-config-bitovi
This package provides Bitovi's base JS .eslintrc as an extensible shared config. Because linted code is sane code, and sane code is 🔥🔥🔥.

## Installation

Install ESLint along with this configuration package and related dev dependencies:

```javascript
$ yarn add -D eslint eslint-config-bitovi
$ yarn add -D eslint-plugin-promise eslint-plugin-import eslint-plugin-filenames
```

If you're behind the times and still using NPM (but we're judging you a little bit):

```javascript
$ npm install --save-dev eslint eslint-config-bitovi
$ npm install --save-dev eslint-plugin-promise eslint-plugin-import eslint-plugin-filenames
```

## Using This Config

### Configurations

### Using What You Want

### A note for your package.json

There seems to be some issues with eslint where unless you also globally install this config and plugins, it will not run. You can get around this by calling eslint by `./node_modules/.bin/eslint`. You'll probably want to do something like:

```javascript
{
  scripts: {
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

## JavaScript Style Guide

