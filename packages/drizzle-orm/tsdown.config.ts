import { defineConfig } from "tsdown";

export default defineConfig({
  exports: true,
  dts: {
    enabled: true,
    oxc: true
  }
});
