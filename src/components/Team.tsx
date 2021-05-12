import React from "react";
import { mapPlayer } from "./Player";

interface TeamProps {
  players: {
    score: number;
    name: string;
  }[];
  name: string;
}

function mapTeam(
  teams: {
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
      <Team players={teams[pos].players} name={teams[pos].name} />
    );
  }

  return displayTeams;
}

class Team extends React.Component<TeamProps> {
  render() {
    const players = this.props.players;
    let displayPlayers = mapPlayer(players);

    return (
      <li className="team">
        <h1 className="teamName">{this.props.name}</h1>
        <ol className="playerList">{displayPlayers}</ol>
      </li>
    );
  }
}

export { Team, mapTeam };
