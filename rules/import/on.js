'use strict';

module.exports = {
  plugins: ['import'],
  rules: {
    // Ensure imports point to a file/module that can be resolved. (no-unresolved)
    'import/no-unresolved': 0,
    // Ensure named imports correspond to a named export in the remote file. (named)
    'import/named': 0,
    // Ensure a default export is present, given a default import. (default)
    'import/default': 0,
    // Ensure imported namespaces contain dereferenced properties as they are dereferenced. (namespace)
    'import/namespace': 0,
    // Restrict which files can be imported in a given folder (no-restricted-paths)
    'import/no-restricted-paths': 0,
    // Forbid import of modules using absolute paths (no-absolute-path)
    'import/no-absolute-path': 'error',
    // Forbid require() calls with expressions (no-dynamic-require)
    'import/no-dynamic-require': 0,
    // Prevent importing the submodules of other modules (no-internal-modules)
    'import/no-internal-modules': 0,
    // Forbid Webpack loader syntax in imports (no-webpack-loader-syntax)
    'import/no-webpack-loader-syntax': 0,
    // Report any invalid exports, i.e. re-export of the same name (export)
    'import/export': 'error',
    // Report use of exported name as identifier of default export (no-named-as-default)
    'import/no-named-as-default': 'error',
    // Report use of exported name as property of default export (no-named-as-default-member)
    'import/no-named-as-default-member': 0,
    // Report imported names marked with @deprecated documentation tag (no-deprecated)
    'import/no-deprecated': 'warn',
    // Forbid the use of extraneous packages (no-extraneous-dependencies)
    'import/no-extraneous-dependencies': 'error',
    // Forbid the use of mutable exports with var or let. (no-mutable-exports)
    'import/no-mutable-exports': 0,
    // Report potentially ambiguous parse goal (script vs. module) (unambiguous)
    'import/unambiguous': 0,
    // Report CommonJS require calls and module.exports or exports.*. (no-commonjs)
    'import/no-commonjs': 'error',
    // Report AMD require and define calls. (no-amd)
    'import/no-amd': 'error',
    // No Node.js builtin modules. (no-nodejs-modules)
    'import/no-nodejs-modules': 'warn',
    // Ensure all imports appear before other statements (first)
    'import/first': 'error',
    // Report repeated import of the same module in multiple places (no-duplicates)
    'import/no-duplicates': 'error',
    // Report namespace imports (no-namespace)
    'import/no-namespace': 'error',
    // Ensure consistent use of file extension within the import path (extensions)
    'import/extensions': 0,
    // Enforce a convention in module import order (order)
    'import/order': ['error', {
      groups: [
        'builtin',
        'external',
        'parent',
        'sibling',
        'index'
      ],
      'newlines-between': 'always'
    }],
    // Enforce a newline after import statements (newline-after-import)
    'import/newline-after-import': 'error',
    // Prefer a default export if module exports a single name (prefer-default-export)
    'import/prefer-default-export': 0,
    // Limit the maximum number of dependencies a module can have (max-dependencies)
    'import/max-dependencies': 0,
    // Forbid unassigned imports (no-unassigned-import)
    'import/no-unassigned-import': 0,
    // Forbid named default exports (no-named-default)
    'import/no-named-default': 0,
    // Forbid anonymous values as default exports
    'no-anonymous-default-export': 'error'
  }
};
