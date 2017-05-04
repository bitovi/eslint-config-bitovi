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
    "lint": "./node_modules/.bin/eslint *.js"
  }
}
```

## JavaScript Style Guide

