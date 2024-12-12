import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import jest from "eslint-plugin-jest";

export default tseslint.config(
  { ignores: ["dist"] },
  eslint.configs.recommended,
  {
    files: ["**/*.?(m|c)ts"],
    extends: [tseslint.configs.strictTypeChecked],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        projectService: {
          allowDefaultProject: ["src/*.spec.ts"],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ["**/*.?(spec|test).?(c)ts"],
    plugins: { jest },
    languageOptions: {
      globals: jest.environments.globals.globals,
    },
    ...jest.configs["flat/recommended"],
  },
  {
    files: ["**/*.cts"],
    rules: {
      "@typescript-eslint/no-require-imports": [
        "error",
        { allowAsImport: true },
      ],
    },
  },
  eslintConfigPrettier,
);
