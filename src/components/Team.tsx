import React from "react";
import { mapPlayer } from "./Player";

interface TeamProps {
  players: {
    score: number;
    name: string;
  }[];
  name: string;
  score: number;
  style: {};
}

function mapTeam(
  teams: {
    score: number;
    name: string;
    players: {
      score: number;
      name: string;
    }[];
  }[]
) {
  let displayTeams: {}[] = [];

  for (let pos in teams) {
    displayTeams.push(
      <Team players={teams[pos].players} name={teams[pos].name} score={teams[pos].score} style={{order: teams[pos].score}}/>
    );
  }

  return displayTeams;
}

class Team extends React.Component<TeamProps> {
  render() {
    const players = this.props.players;
    let displayPlayers = mapPlayer(players);

    return (
      <div className="team" style={this.props.style}>
        <h3 className="teamName">{this.props.name}</h3>
        <h3 className="teamScore">{this.props.score}</h3>
        <div className="playerList">{displayPlayers}</div>
      </div>
    );
  }
}

export { Team, mapTeam };
