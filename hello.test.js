var utils  = require("course-utilities");
var hello = utils.load('./hello.js', "hello");

test("outputs the correct string", () => {
  expect(hello("Andrew")).toBe("Hello, Andrew");
  expect(hello("")).toBe("");
});

test("empty", () => {
  expect(hello("")).toBe("");
});

test("shouting", () => {
  expect(hello("ANDREW")).toBe("HELLO ANDREW!");
});