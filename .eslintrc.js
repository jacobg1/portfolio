module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ["@typescript-eslint", "react", "prettier", "no-floating-promise"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: ["tsconfig.json"],
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/no-misused-promises": "error",
    "react/prop-types": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    "prettier/prettier": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-floating-promises": "error",
  },
};
