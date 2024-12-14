import { helloWorld } from "ts-hello-world";

test("helloWorld", () => {
  expect(helloWorld()).toBe("Hello, World!");
});
