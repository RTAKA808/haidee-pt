import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import importPlugin from "eslint-plugin-import";
import tailwindcss from "eslint-plugin-tailwindcss";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Core Next.js ESLint rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Tailwind CSS ESLint rules
  ...tailwindcss.configs["flat/recommended"],

  // Additional settings to support path aliases
  {
    plugins: {
      import: importPlugin,
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json", // required for @ alias support
        },
      },
    },
    rules: {
      // Optional but helpful import rules
      "import/no-unresolved": "error",
      "import/order": [
        "warn",
        {
          "alphabetize": { order: "asc", caseInsensitive: true },
          "groups": ["builtin", "external", "internal", ["parent", "sibling", "index"]],
          "newlines-between": "always"
        }
      ]
    }
  },

  // Prettier config (should be last to override other configs)
  ...compat.extends("prettier"),
];

export default eslintConfig;