import helloWorld = require("ts-hello-world");

test("helloWorld", () => {
  expect(helloWorld.helloWorld()).toBe("Hello, World!");
});
