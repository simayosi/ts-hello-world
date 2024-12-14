import { expect } from "@jest/globals";
import { test } from "@jest/globals";
import { helloWorld } from "./hello_world";

test("helloWorld", () => {
  expect(helloWorld()).toBe("Hello, World!");
});
