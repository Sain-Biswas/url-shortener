import { defineConfig } from "tsdown";

export default defineConfig({
  exports: false,
  clean: true,
  dts: true,
  format: "esm",
  platform: "node",
  entry: {
    main: "src/index.ts",
    schema: "src/schema.ts"
  }
});
