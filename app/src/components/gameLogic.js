//- balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
const initAtBat = {
  strikes: 0,
  balls: 0
};

const initScores = {
  awayTeam: 0,
  homeTeam: 0
};

const initBoard = {
  score: { ...initScores },
  atBat: { ...initAtBat },
  batting: "awayTeam"
};

const cloneBoard = scoreboard =>
  scoreboard ? { ...scoreboard } : { ...initBoard };

const addStrike = scoreboard => {
  newBoard = cloneBoard(scoreboard);
  newBoard.atBat.strikes = (newBoard.atBat.strikes + 1) % 3;
  return newBoard;
};

const addBall = scoreboard => {
  const newBoard = cloneBoard(scoreboard);
  newBoard.atBat.balls = (newBoard.atBat.balls + 1) % 4;
  return newBoard;
};

module.exports = { addStrike, addBall, initAtBat };
