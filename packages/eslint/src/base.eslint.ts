import { type Config, defineConfig, globalIgnores } from "eslint/config";

import pluginJavascript from "@eslint/js";
import pluginPrettier from "eslint-plugin-prettier/recommended";
import pluginTypeScript from "typescript-eslint";

export const baseEslintConfig: Config[] = defineConfig(
  globalIgnores(["dist"]),

  pluginTypeScript.configs.strictTypeChecked,
  pluginTypeScript.configs.stylisticTypeChecked,

  pluginJavascript.configs.recommended,

  pluginPrettier,

  {
    files: ["**/*.{ts,tsx,cts,mts,js,jsx,mjs,cjs}"],

    rules: {
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: { attributes: false } },
      ],
      "@typescript-eslint/restrict-template-expressions": "off",
    },
  },
);
