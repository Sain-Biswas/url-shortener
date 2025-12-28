import { defineConfig } from "tsdown";

export default defineConfig({
  exports: true,
  entry: {
    main: "src/index.ts",
    schema: "src/schema.ts"
  },
  dts: {
    enabled: true
  }
});
