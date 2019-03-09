module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6
  },
  extends: ['plugin:vue/recommended', 'airbnb-base', 'eslint:recommended'],
  env: {
    browser: true,
    es6: true
  },
  plugins: [
    'vue'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    'eqeqeq': 1,

    'no-console': 0,

    'no-alert': 'error',

    'semi': 2,

    'arrow-spacing': ['error', { "before": true, "after": true }],

    'import/no-extraneous-dependencies': 0

  }
}
