module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['react-app', 'plugin:storybook/recommended'],
  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/no-explicit-any': [
      'warn',
      {
        fixToUnknown: true,
        ignoreRestArgs: true
      }
    ],
    'react/jsx-key': [
      'warn',
      {
        checkFragmentShorthand: true
      }
    ],
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error', 'info', 'log']
      }
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-restricted-globals': 'off',
    'react/react-in-jsx-scope': 'off'
  }
}
