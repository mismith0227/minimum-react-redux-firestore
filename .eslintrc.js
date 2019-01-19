module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  plugins: ['react', 'jsx-a11y', 'flowtype', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],
  rules: {
    'no-constant-condition': [0],
    'react/prop-types': [0],
    'react/no-find-dom-node': [0],
    'react/prefer-stateless-function': [1, { ignorePureComponents: false }],
    'jsx-a11y/no-onchange': [0],
    'prettier/prettier': 'error',
  },
}
