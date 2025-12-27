import { defineConfig } from "tsdown";

export default defineConfig({
  exports: true,
  entry: ["src/index.ts"],
  ignoreWatch: ["dist"],
  unbundle: true,
  skipNodeModulesBundle: true,
  dts: false,
});
