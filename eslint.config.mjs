import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier,
    },
    rules: {
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
      semi: ["error", "never"],
      "react/react-in-jsx-scope": "off", // Desativa a regra específica do React
      "prettier/prettier": ["error", { endOfLine: "auto" }],
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  configPrettier, // Adiciona a configuração do Prettier para desativar regras conflitantes
];
