import React from "react";
import { mapTeam } from "../components/Team";

interface DisplayProps {
  teams: {
    score: number;
    name: string;
    players: {
      score: number;
      name: string;
    }[];
  }[];
}

interface DisplayState {}

class Display extends React.Component<DisplayProps, DisplayState> {
  render() {
    const teams = this.props.teams;
    const displayTeams = mapTeam(teams);

    return (
      <div className="display">
        <div className="teamList">{displayTeams}</div>
      </div>
    );
  }
}

export default Display;
