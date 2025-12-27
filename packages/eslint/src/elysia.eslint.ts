import { defineConfig, type Config } from "eslint/config";
import { baseEslintConfig } from "~/base.eslint";

import globals from "globals";

export const elysiaEslintConfig: Config[] = defineConfig(
  baseEslintConfig,

  {
    files: ["**/*.{ts,tsx,cts,mts,js,jsx,mjs,cjs}"],

    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.serviceworker,
        ...globals.builtin,
      },
    },
  },
);
