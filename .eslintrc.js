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
  plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
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
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': 'off',
    'comma-dangle': 'off',
    'no-shadow': 'off',
    'react/jsx-props-no-spreading': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-undef': 'off',
    'react/no-deprecated': 'off',
    'object-curly-newline': 'off',
    'no-underscore-dangle': 'off',
    'operator-linebreak': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'i18next/no-literal-string': 'off',
    'max-len': ['warn', { ignoreComments: true, code: 120 }],
    'react/jsx-wrap-multilines': 'off',
    'react/require-default-props': 'off',
    'no-restricted-globals': ['error', 'event', 'fdescribe'],
    'react/jsx-curly-brace-presence': 'off',
    'no-param-reassign': 'off',
    'wrap-iife': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'consistent-return': 'off',
    indent: 'off',
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },
    },
  ],
};
