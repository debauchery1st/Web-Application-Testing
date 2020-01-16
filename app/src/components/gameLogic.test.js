const { addStrike, addBall } = require("./gameLogic");

test("first strike", () => expect(addStrike().atBat.strikes).toBe(1));
test("second strike", () => expect(addStrike().atBat.strikes).toBe(2));
test("3rd strike will reset strikes to 0", () =>
  expect(addStrike().atBat.strikes).toBe(0));

test("first ball", () => expect(addBall().atBat.balls).toBe(1));
test("second ball", () => expect(addBall().atBat.balls).toBe(2));
test("third ball", () => expect(addBall().atBat.balls).toBe(3));
test("fourth ball will reset balls to 0", () =>
  expect(addBall().atBat.balls).toBe(0));
