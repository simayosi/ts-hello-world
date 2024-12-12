/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "cts",
    "tsx",
    "json",
    "node",
  ],
  testEnvironment: "node",
  testMatch: ["**/?(*.)+(spec|test).?(c)[jt]s?(x)"],
  transform: {
    "^.+.c?tsx?$": ["ts-jest", {}],
  },
};
