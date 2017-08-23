// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
      sourceType: 'module'
    },
    env: {
      browser: true,
    },
    extends: 'airbnb-base',
    // required to lint *.vue files
    plugins: [
      'html',
      'import'
    ],
    // check if imports actually resolve
    settings: {
      'import/resolver': {
        webpack: 'webpack.config.js',
      },
    },
    // add your custom rules here
    'rules': {
      // don't require .vue extension when importing
      'import/extensions': ['error', 'always', {
        'js': 'never',
        'vue': 'never'
      }],
      // allow optionalDependencies
      'import/no-extraneous-dependencies': ['error', {
        'optionalDependencies': ['test/unit/index.js'],
        'devDependencies': true
      }],
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

      "no-continue": 0,
      "no-mixed-operators": 0,
      "no-restricted-syntax": 0,
      "import/no-named-as-default-member": 0,
      "comma-dangle": ["error", "never"],
      "camelcase": [0, {"properties": "always"}],
      "spaced-comment": [0, "always"],
      "func-names": 0,
      "no-await-in-loop": 0,
      "radix": 0,
      "indent": [2, 4],
      "no-console": 0,
      "import/no-unresolved": 2,
      "semi": [2, "never"],
      "space-before-function-paren": ["error", "always"],
      "template-curly-spacing": ["error", "always"],
      "no-underscore-dangle": 0,
      "no-param-reassign": 0,
      "arrow-body-style": ["error", "always"],
      "max-len": ["error", 120, 4, { "ignoreUrls": true, "ignoreTrailingComments": true }]
    }
  }
