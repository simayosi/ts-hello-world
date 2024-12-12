import esbuild from "rollup-plugin-esbuild";
import { dts } from "rollup-plugin-dts";

const commonConfigs = {
  input: "src/index.ts",
};

export default [
  {
    ...commonConfigs,
    output: [
      {
        file: "./dist/ts-hello-world.js",
        format: "es",
      },
      {
        file: "./dist/ts-hello-world.cjs",
        format: "cjs",
      },
    ],
    plugins: [esbuild()],
  },
  {
    ...commonConfigs,
    output: [
      {
        file: "./dist/ts-hello-world.d.ts",
        format: "es",
      },
      {
        file: "./dist/ts-hello-world.d.cts",
        format: "cjs",
      },
    ],
    plugins: [dts()],
  },
  {
    ...commonConfigs,
    output: {
      file: "./dist/ts-hello-world.min.mjs",
      format: "es",
    },
    plugins: [
      esbuild({
        target: ["es2020", "edge88", "firefox78", "chrome87", "safari14"],
        minify: true,
      }),
    ],
  },
];
