module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "next",
    "turbo",
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    semi: ["error", "never"]
  },
  plugins: ["react-refresh"],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
}
