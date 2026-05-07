import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // Erros comuns
      "no-unused-vars": "warn",
      "no-undef": "error",
      "no-console": "warn",

      // Boas práticas
      eqeqeq: ["error", "always"],
      curly: "error",
      "no-var": "error",
      "prefer-const": "warn",

      // Estilo
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
];
