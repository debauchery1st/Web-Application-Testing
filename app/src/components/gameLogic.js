// vanilla js - baseball logic

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
  batting: "awayTeam",
  teams: { homeTeam: "", awayTeam: "" }
};

const cloneBoard = scoreboard =>
  scoreboard ? { ...scoreboard } : { ...initBoard };

const toggleBatting = scoreboard => {
  const newBoard = cloneBoard(scoreboard);
  newBoard.batting = newBoard.batting === "awayTeam" ? "homeTeam" : "awayTeam";
  return newBoard;
};

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

const setHomeTeam = (name, scoreboard) => {
  const newBoard = cloneBoard(scoreboard);
  newBoard.teams.homeTeam = name;
  return newBoard;
};

const setAwayTeam = (name, scoreboard) => {
  const newBoard = cloneBoard(scoreboard);
  newBoard.teams.awayTeam = name;
  return newBoard;
};

const setTeams = (home, away, scoreboard) => {
  const newBoard = cloneBoard(scoreboard);
  newBoard.teams.homeTeam = home;
  newBoard.teams.awayTeam = away;
  return newBoard;
};

module.exports = {
  addStrike,
  addBall,
  toggleBatting,
  initBoard,
  setTeams,
  setHomeTeam,
  setAwayTeam
};
