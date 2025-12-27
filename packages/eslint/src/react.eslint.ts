import { defineConfig, type Config } from "eslint/config";
import { baseEslintConfig } from "~/base.eslint";

import globals from "globals";

import pluginEslintReact from "@eslint-react/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";

import pluginTanstackQuery from "@tanstack/eslint-plugin-query";
import pluginTanstackRouter from "@tanstack/eslint-plugin-router";

export const reactEslintConfig: Config[] = defineConfig(
  baseEslintConfig,

  pluginEslintReact.configs["strict-typescript"],
  pluginReactHooks.configs.flat["recommended-latest"],
  pluginReactRefresh.configs.vite,

  pluginTanstackQuery.configs["flat/recommended"],
  pluginTanstackRouter.configs["flat/recommended"],

  {
    files: ["**/*.{ts,tsx,cts,mts,js,jsx,mjs,cjs}"],

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    ...pluginReact.configs.flat.recommended,
    ...pluginReact.configs.flat["jsx-runtime"]
  },

  {
    files: ["**/*.{ts,tsx,cts,mts,js,jsx,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.builtin,
        ...globals.devtools
      }
    },

    rules: {
      "@eslint-react/naming-convention/filename": [
        "error",
        { rule: "kebab-case" }
      ],
      "@eslint-react/naming-convention/component-name": [
        "error",
        { rule: "PascalCase", allowAllCaps: true }
      ]
    }
  }
);
