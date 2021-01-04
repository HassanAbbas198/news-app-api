module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: ['prettier', 'airbnb-base'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    'prettier/prettier': 'error',
    'comma-dangle': ['warn', 'never'],
    'no-unused-vars': ['warn'],
    'prefer-destructuring': false
  }
};
