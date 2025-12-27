import { defineConfig, type Config } from "eslint/config";
import { elysiaEslintConfig } from "~/elysia.eslint";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import pluginDrizzle from "eslint-plugin-drizzle";

export const drizzleEslintConfig: Config[] = defineConfig(
  elysiaEslintConfig,

  {
    files: ["**/*.{ts,tsx,cts,mts,js,jsx,mjs,cjs}"],

    plugins: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      drizzle: pluginDrizzle,
    },

    rules: {
      "drizzle/enforce-delete-with-where": [
        "error",
        { drizzleObjectName: ["database", "ctx.database"] },
      ],
      "drizzle/enforce-update-with-where": [
        "error",
        { drizzleObjectName: ["database", "ctx.database"] },
      ],
    },
  },
);
