module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      files: ["**/*.ts", "**/*.tsx"],
      excludedFiles: ["**/*.js"],
      plugins: ["@typescript-eslint"],
      extends: [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "plugin:storybook/recommended",
      ],
      rules: {
        "react/react-in-jsx-scope": "off",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname, // <-- this did the trick for me
  },
  plugins: ["react"],
  settings: {
    react: {
      version: "detect",
    },
  },
};
