import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";
import { Linter } from "eslint";

export default [
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
      "better-tailwindcss": eslintPluginBetterTailwindcss,
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
