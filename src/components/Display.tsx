import React from "react";
import { mapTeam } from "../components/Team";

interface DisplayProps {
  teams: {
    name: string;
    players: {
      name: string;
      score: number;
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
        <ol className="teamList">{displayTeams}</ol>
      </div>
    );
  }
}

export default Display;
