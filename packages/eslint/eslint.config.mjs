import { defineConfig } from "eslint/config";

import { baseEslintConfig, typescriptParser } from "./dist/index.mjs";

export default defineConfig(
  baseEslintConfig,

  {
    files: ["**/*.{ts,tsx,cts,mts,js,jsx,mjs,cjs}"],

    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);
