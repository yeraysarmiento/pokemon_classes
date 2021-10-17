module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: { 
    "no-console": "warn", 
    "no-use-before-define": "warn", 
    "spaced-comment": "warn" 
};
