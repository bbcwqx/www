import parser from "@typescript-eslint/parser";
import plugin from "eslint-plugin-better-tailwindcss";
import { Linter } from "eslint";

export default [
  {
    files: ["**/*.{ts,tsx,cts,mts}"],
    languageOptions: {
      parser,
    },
  },
  {
    files: ["**/*.{jsx,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "better-tailwindcss": plugin,
    },
    rules: {
      "better-tailwindcss/enforce-consistent-class-order": ["warn", {
        order: "official",
      }],
    },
    settings: {
      "better-tailwindcss": {
        entryPoint: "static/styles.css",
      },
    },
  },
] satisfies Linter.Config[];
