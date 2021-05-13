import React from "react";
import { mapPlayers } from "./Player";

//the datastructure for the props
interface TeamProps {
  players: {
    score: number;
    name: string;
  }[];
  name: string;
  score: number;
  style: {};
}

//crates a list of ReactElements from an array of teams
function mapTeams(
  teams: {
    score: number;
    name: string;
    players: {
      score: number;
      name: string;
    }[];
  }[]
) {

  //create empty array
  let displayTeams: {}[] = [];

  //add a ReactElement with given data to the empty array for each element in the list
  for (let team of teams) {
    displayTeams.push(
      <Team
        players={team.players}
        name={team.name}
        score={team.score}
        style={{ order: team.score }}
      />
    );
  }

  //return the array
  return displayTeams;
}

class Team extends React.Component<TeamProps> {
  //rendering the React Element
  render() {
    //setting up variables
    const players = this.props.players;
    let displayPlayers = mapPlayers(players);

    //return the ReactElement
    return (
      <div className="team" style={this.props.style}>
        <h3 className="teamName">{this.props.name}:</h3>
        <h3 className="teamScore">{this.props.score}</h3>
        <div className="playerList">{displayPlayers}</div>
      </div>
    );
  }
}

export { Team, mapTeams };
