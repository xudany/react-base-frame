module.exports = {
  settings: {
    'import/core-modules': ['styled-jsx/css'],
    'import/resolver': {
      'node': {
        'paths': ['.'],
        'extensions': ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    // 'plugin:prettier/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  plugins: [
    'import',
    'react',
    'jsx-a11y',
    // 'prettier',
    '@typescript-eslint',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
  },
  'parserOptions': {
    sourceType: 'module',
    'project': 'tsconfig.json',
    'ecmaFeatures': {
      'legacyDecorators': true,
    },
  },
  rules: {
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'no-underscore-dangle': 0,
    'jsx-a11y/href-no-hash': ['off'],
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never',
        'd.ts': 'never',
      },
    ],

    'react/jsx-props-no-spreading': 0,
    'react/prop-types': [1, {'ignore': ['children']}],
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,

    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-use-before-define': 1,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'no-param-reassign': 0,

    'react/require-default-props': 0,
    camelcase: 0,

    // 'react-hooks/exhaustive-deps': 1,
  },
};
