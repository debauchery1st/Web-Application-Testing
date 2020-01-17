import React from "react";
import baseball from "./baseball";
import ScoreCard from "./ScoreCard";
import AtBat from "./AtBat";

class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.state };
  }
  componentDidMount() {
    const sb0 = { ...this.state.scoreboard }; //clone
    const sb1 = baseball.setHomeTeam(this.props.home, sb0); // 1st mutation
    const sb2 = baseball.setAwayTeam(this.props.away, sb1); // second mutation
    this.setState({ scoreboard: sb2 }); // update state outside of constructor
  }
  dispatch(action) {
    const foo = {
      strike: this.addStrike,
      ball: this.addBall,
      rotate: this.rotate,
      hit: this.hit,
      foul: this.foul
    };
    return foo[action];
  }
  componentDidUpdate() {
    const cmd = String(this.props.state.rpc);
    if (cmd.length === 0) return;
    const updateScoreBoard = this.dispatch(cmd); //get foo
    this.props.clr(this.props.state); // prevent recursion
    updateScoreBoard();
  }
  persist = scoreboard => this.setState({ scoreboard });
  foul = () => this.persist(baseball.foul(this.state.scoreboard));
  hit = () => this.persist(baseball.hit(this.state.scoreboard));
  addStrike = () => this.persist(baseball.addStrike(this.state.scoreboard));
  addBall = () => this.persist(baseball.addBall(this.state.scoreboard));
  setHome = (teamName, sb) =>
    this.persist(baseball.setHomeTeam(teamName, sb || this.state.scoreboard));
  setAway = (teamName, sb) =>
    this.persist(baseball.setAwayTeam(teamName, sb || this.state.scoreboard));
  setTeams = (home, away) =>
    this.persist(baseball.setTeams(home, away, this.state.scoreboard));
  rotate = () => {
    this.persist(baseball.clrAB(baseball.toggleBatting(this.state.scoreboard)));
  };
  whoIsBatting = () => baseball.whoIsBatting(this.state.scoreboard);

  render() {
    return (
      <div className="ScoreBoard">
        <section className="TeamNames">
          <ScoreCard
            team={this.state.scoreboard.teams.homeTeam}
            score={this.state.scoreboard.score.homeTeam}
            who={this.whoIsBatting()}
          />
          <ScoreCard
            team={this.state.scoreboard.teams.awayTeam}
            score={this.state.scoreboard.score.awayTeam}
            who={this.whoIsBatting()}
          />
        </section>
        <AtBat
          strikes={this.state.scoreboard.atBat.strikes}
          balls={this.state.scoreboard.atBat.balls}
          who={this.whoIsBatting()}
        />
      </div>
    );
  }
}

export default ScoreBoard;
