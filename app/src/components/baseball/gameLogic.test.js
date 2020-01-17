const {
  addStrike,
  addBall,
  toggleBatting,
  initBoard,
  setTeams,
  setHomeTeam,
  setAwayTeam
} = require("./gameLogic");

let sb = initBoard;

test("first strike", () => {
  sb = addStrike(sb);
  return expect(sb.atBat.strikes).toBe(1);
});

test("second strike", () => {
  sb = addStrike(sb);
  return expect(sb.atBat.strikes).toBe(2);
});

test("3rd strike will reset strikes to 0", () => {
  sb = addStrike(sb);
  return expect(sb.atBat.strikes).toBe(0);
});

test("first ball", () => {
  sb = addBall(sb);
  expect(sb.atBat.balls).toBe(1);
});

test("second ball", () => {
  sb = addBall(sb);
  expect(sb.atBat.balls).toBe(2);
});

test("third ball", () => {
  sb = addBall(sb);
  expect(sb.atBat.balls).toBe(3);
});

test("Fourth ball", () => {
  sb = addBall(sb);
  expect(sb.atBat.balls).toBe(0);
});

test("toggle team at bat", () => {
  sb = toggleBatting(sb);
  return expect(sb.batting).toBe("homeTeam");
});

test("toggle team at bat", () => {
  sb = toggleBatting(sb);
  return expect(sb.batting).toBe("awayTeam");
});

test("set teams", () => {
  sb = setTeams("Phillies", "Cubs", sb);
  return expect(
    sb.teams.homeTeam === "Phillies" && sb.teams.awayTeam === "Cubs"
  ).toBe(true);
});

test("set home team", () => {
  sb = setHomeTeam("Phillies", sb);
  return expect(sb.teams.homeTeam).toBe("Phillies");
});

test("set away team", () => {
  sb = setAwayTeam("Cubs", sb);
  return expect(sb.teams.awayTeam).toBe("Cubs");
});
