module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  parserOptions: {
    "project": "./tsconfig.json",
    "sourceType": "module",
    "ecmaVersion": 8
  },
  "ignorePatterns": [
    "www/**",
    "deprecated/**",
    ".eslintrc.js",
    "stencil.config.ts",
  ],
  "env": {
    "jest": true
  },
  extends: [
    "./node_modules/@ey-studio-phl/eslint/.eslintrc.js"
  ],
  "rules": {
    "class-methods-use-this": ["error", { "exceptMethods": ["render"] }],
    // don't force es6 functions to include space before paren
    "space-before-function-paren": 0,
    "id-length": [2, {
      "min": 3,
      "exceptions": [
        "fs",
        "id",
        "cb",
        "fn",
        "el"
      ]
    }],
    "max-lines": 0,
    "no-magic-numbers": [2, {
      "enforceConst": true,
      "ignore": [0, 1, 2, -1]
    }],
    "no-undef": 0,
    "no-use-before-define": 0,
    "indent": ["error", 2],
    "no-sync": 0,
    "sort-imports": 0,
    "no-unused-vars": [2, { "vars": "all", "varsIgnorePattern": "h|Host" }],
    "no-plusplus": 0,
    "@typescript-eslint/no-unused-vars": [2, {
      args: 'none',
      "varsIgnorePattern": "h|Host"
    }],
    "no-unused-expressions": [2, {
      "allowTernary": true
    }],
    "no-confusing-arrow": 0,
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }]
  }
};
