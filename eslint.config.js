import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginJest from "eslint-plugin-jest";

export default tseslint.config(
  { ignores: ["dist"] },
  eslint.configs.recommended,
  {
    files: ["**/*.?(m|c)ts"],
    extends: [tseslint.configs.strictTypeChecked],
    languageOptions: {
      ecmaVersion: 2020,
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
    plugins: { jest: pluginJest },
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
    rules: {
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
    },
  },
  {
    files: ["**/*.cts"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  eslintConfigPrettier,
);
