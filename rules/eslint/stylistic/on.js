module.exports = {
  // enforce consistent spacing inside array brackets
  'array-bracket-spacing': 'error',
  // enforce consistent spacing inside single-line blocks
  'block-spacing': ['error' 'always'],
  // enforce consistent brace style for blocks
  'brace-style': 'error',
  // enforce camelcase naming convention
  'camelcase': 'error',
  // enforce or disallow capitalization of the first letter of a comment
  'capitalized-comments': 0,
  // require or disallow trailing commas
  'comma-dangle': 'error',
  // enforce consistent spacing before and after commas
  'comma-spacing': 'error',
  // enforce consistent comma style
  'comma-style': 'error',
  // enforce consistent spacing inside computed property brackets
  'computed-property-spacing': 'error',
  // enforce consistent naming when capturing the current execution context
  'consistent-this': 0,
  // require or disallow newline at the end of files
  'eol-last': 'error',
  // require or disallow spacing between function identifiers and their invocations
  'func-call-spacing': 'error',
  // require function names to match the name of the variable or property to which they are assigned
  'func-name-matching': 'error',
  // require or disallow named function expressions
  'func-names': 'error',
  // enforce the consistent use of either function declarations or expressions
  'func-style': 'error',
  // disallow specified identifiers
  'id-blacklist': 0,
  // enforce minimum and maximum identifier lengths
  'id-length': ['warn', {
    min: 2
  }],
  // require identifiers to match a specified regular expression
  'id-match': 0,
  // enforce consistent indentation
  'indent': ['error', 2],
  // enforce the consistent use of either double or single quotes in JSX attributes
  'jsx-quotes': 'error',
  // enforce consistent spacing between keys and values in object literal properties
  'key-spacing': 'error',
  // enforce consistent spacing before and after keywords
  'keyword-spacing': 'error',
  // enforce position of line comments
  'line-comment-position': 0,
  // enforce consistent linebreak style
  'linebreak-style': 0,
  // require empty lines around comments
  'lines-around-comment': 0,
  // require or disallow newlines around directives
  'lines-around-directive': 0,
  // enforce a maximum depth that blocks can be nested
  'max-depth': ['error', 6],
  // enforce a maximum line length
  'max-len': 'warn',
  // enforce a maximum number of lines per file
  'max-lines': 0,
  // enforce a maximum depth that callbacks can be nested
  'max-nested-callbacks': ['error', 4],
  // enforce a maximum number of parameters in function definitions
  'max-params': 0,
  // enforce a maximum number of statements allowed in function blocks
  'max-statements': 0,
  // enforce a maximum number of statements allowed per line
  'max-statements-per-line': ['warn', 1],
  // enforce newlines between operands of ternary expressions
  'multiline-ternary': 0,
  // require constructor names to begin with a capital letter
  'new-cap': 'error',
  // require parentheses when invoking a constructor with no arguments
  'new-parens': 'error',
  // require or disallow an empty line after variable declarations
  'newline-after-var': 'error',
  // require an empty line before return statements
  'newline-before-return': 'error',
  // require a newline after each call in a method chain
  'newline-per-chained-call': 0,
  // disallow Array constructors
  'no-array-constructor': 'error',
  // disallow bitwise operators
  'no-bitwise': 'error',
  // disallow continue statements
  'no-continue': 0,
  // disallow inline comments after code
  'no-inline-comments': 0,
  // disallow if statements as the only statement in else blocks
  'no-lonely-if': 'error',
  // disallow mixed binary operators
  'no-mixed-operators': 'error',
  // disallow mixed spaces and tabs for indentation
  'no-mixed-spaces-and-tabs': 'error',
  // disallow use of chained assignment expressions
  'no-multi-assign': 'error',
  // disallow multiple empty lines
  'no-multiple-empty-lines': 'error',
  // disallow negated conditions
  'no-negated-condition': 0,
  // disallow nested ternary expressions
  'no-nested-ternary': 'error',
  // disallow Object constructors
  'no-new-object': 'error',
  // disallow the unary operators ++ and --
  'no-plusplus': 0,
  // disallow specified syntax
  'no-restricted-syntax': 0,
  // disallow all tabs
  'no-tabs': 'error',
  // disallow ternary operators
  'no-ternary': 0,
  // disallow trailing whitespace at the end of lines
  'no-trailing-spaces': 'error',
  // disallow dangling underscores in identifiers
  'no-underscore-dangle': 'error',
  // disallow ternary operators when simpler alternatives exist
  'no-unneeded-ternary': 'error',
  // disallow whitespace before properties
  'no-whitespace-before-property': 'error',
  // enforce the location of single-line statements
  'nonblock-statement-body-position': 0,
  // enforce consistent line breaks inside braces
  'object-curly-newline': 'error',
  // enforce consistent spacing inside braces
  'object-curly-spacing': 0,
  // enforce placing object properties on separate lines
  'object-property-newline': ['error', {
    allowMultiplePropertiesPerLine: true
  }],
  // enforce variables to be declared either together or separately in functions
  'one-var': ['error', 'never'],
  // require or disallow newlines around variable declarations
  'one-var-declaration-per-line': ['error', 'initializations'],
  // require or disallow assignment operator shorthand where possible
  'operator-assignment': 0,
  // enforce consistent linebreak style for operators
  'operator-linebreak': 'error',
  // require or disallow padding within blocks
  'padded-blocks': ['error', 'after'],
  // require quotes around object literal property names
  'quote-props': ['error', 'as-needed'],
  // enforce the consistent use of either backticks, double, or single quotes
  'quotes': ['error', 'single', { 
    'allowTemplateLiterals': true 
  }],
  // require JSDoc comments
  'require-jsdoc': 0,
  // require or disallow semicolons instead of ASI
  'semi': 'error',
  // enforce consistent spacing before and after semicolons
  'semi-spacing': 'error',
  // require object keys to be sorted
  'sort-keys': 0,
  // require variables within the same declaration block to be sorted
  'sort-vars': 0,
  // enforce consistent spacing before blocks
  'space-before-blocks': 'error',
  // enforce consistent spacing before function definition opening parenthesis
  'space-before-function-paren': ['error', {
    anonymous: 'always',
    named: 'never',
    asyncArrow: 'always'
  }],
  // enforce consistent spacing inside parentheses
  'space-in-parens': 'error',
  // require spacing around infix operators
  'space-infix-ops': 'error',
  // enforce consistent spacing before or after unary operators
  'space-unary-ops': ['error', { 
    words: true, 
    nonwords: false
  }],
  // enforce consistent spacing after the //  or /* in a comment
  'spaced-comment': 'error',
  // require or disallow spacing between template tags and their literals
  'template-tag-spacing': 0,
  // require or disallow Unicode byte order mark (BOM)
  'unicode-bom': 0,
  // require parenthesis around regex literals
  'wrap-regex': 0
};