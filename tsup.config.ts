import { pnpPlugin } from "@yarnpkg/esbuild-plugin-pnp";
import type { Options } from "tsup";

const env = process.env.NODE_ENV;

export const tsup: Options = {
  splitting: true,
  sourcemap: env === "development",
  clean: true,
  dts: true,
  format: ["cjs", "esm"],
  minify: false,
  bundle: true,
  watch: env === "development",
  skipNodeModulesBundle: true,
  entryPoints: ["src/index.ts"],
  esbuildPlugins: [pnpPlugin()],
};
