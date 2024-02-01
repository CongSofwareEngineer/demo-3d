module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    indent: [2, 2],
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 0,
    'react/no-unknown-property': 0,
    semi: 'off',
    eqeqeq: 0
  }
}
