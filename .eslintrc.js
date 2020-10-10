module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    sourceType: "module",
  },

  rules: {
    "import/prefer-default-export": "off",
  },
  ignorePatterns: ["client"],
};
