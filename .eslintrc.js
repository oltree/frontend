module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'import/no-unresolved': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    'arrow-body-style': 'off',
    'arrow-parens': 'off',
    'import/extensions': 'off',
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        ignoreRestSiblings: true,
      },
    ],
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': 'off',
    'comma-dangle': 'off',
    'no-shadow': 'off',
    'react/jsx-props-no-spreading': [
      'warn',
      {
        html: 'ignore' | 'enforce',
        custom: 'ignore' | 'enforce',
        explicitSpread: 'ignore' | 'enforce',
        exceptions: 'ignore' | 'enforce',
      },
    ],
    'implicit-arrow-linebreak': 'off',
    'no-undef': 'off',
    'react/no-deprecated': 'off',
    'object-curly-newline': 'off',
    'no-underscore-dangle': 'off',
    'operator-linebreak': 'off',
    'no-console': 'warn',
    'i18next/no-literal-string': [
      'error',
      { markupOnly: true, ignoreAttribute: true },
    ],
    'max-len': ['warn', { ignoreComments: true }],
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
};
