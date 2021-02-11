module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/base',
    'plugin:vue/vue3-essential',
    '@vue/standard',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended'
  ],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    "no-unused-vars": process.env.NODE_ENV === "production" ? "error" : "warn",
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
