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
  bases: { first: "", second: "", third: "" },
  teams: { homeTeam: "", awayTeam: "" },
  hitter: "baseball person",
  lineup: [
    "Babe Ruth",
    "Lucky McHitBall",
    "Tommy TuTone",
    "Rick Sanchez",
    "Ozzy Ozbourne"
  ]
};

const clrAB = scoreboard => {
  const nxt = { ...scoreboard };
  nxt.atBat = { balls: 0, strikes: 0 };
  return nxt;
};

const cloneBoard = scoreboard =>
  scoreboard ? { ...scoreboard } : { ...initBoard };

const toggleBatting = scoreboard => {
  const newBoard = cloneBoard(scoreboard);
  newBoard.batting = newBoard.batting === "awayTeam" ? "homeTeam" : "awayTeam";
  return newBoard;
};

const addStrike = scoreboard => {
  const newBoard = cloneBoard(scoreboard);
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
const whoIsBatting = scoreboard =>
  scoreboard.batting === "awayTeam"
    ? scoreboard.teams.awayTeam
    : scoreboard.teams.homeTeam;

const foul = scoreboard => {
  const nxt = { ...scoreboard };
  nxt.atBat.strikes < 2 && (nxt.atBat.strikes += 1);
  return nxt;
};

const hit = scoreboard => {
  const nxt = { ...scoreboard };
  //
  const firstOccupied = nxt.bases.first !== "";
  const secondOccupied = nxt.bases.second !== "";
  const thirdOccupied = nxt.bases.third !== "";
  //const basesLoaded = firstOccupied && secondOccupied && thirdOccupied;
  if (thirdOccupied) {
    nxt.score[nxt.batting] += 1;
    nxt.bases.third = "";
  }
  if (secondOccupied && !thirdOccupied) {
    nxt.bases.third = nxt.bases.second;
    nxt.bases.second = "";
  }
  if (firstOccupied && !secondOccupied) {
    nxt.bases.second = nxt.bases.first;
    nxt.bases.first = nxt.hitter;
  }
  if (!firstOccupied) {
    nxt.bases.first = nxt.hitter;
  }
  nxt.hitter = nxt.lineup[0];
  nxt.lineup = [...nxt.lineup.slice(1)] || [`Batter ${Date()}`];
  return clrAB(nxt);
};

export {
  addBall,
  addStrike,
  toggleBatting,
  initBoard,
  setTeams,
  setHomeTeam,
  setAwayTeam,
  clrAB,
  whoIsBatting,
  hit,
  foul
};
export default {
  addBall,
  addStrike,
  toggleBatting,
  initBoard,
  setTeams,
  setHomeTeam,
  setAwayTeam,
  clrAB,
  whoIsBatting,
  hit,
  foul
};

// ! old version exports !
// module.exports = {
//   addBall,
//   addStrike,
//   toggleBatting,
//   initBoard,
//   setTeams,
//   setHomeTeam,
//   setAwayTeam
// };
