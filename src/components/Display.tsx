import React from "react";
import { mapTeams } from "../components/Team";

//the datastructure for the props
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

class Display extends React.Component<DisplayProps> {
  //rendering the React Element
  render() {
    //setting up variables
    const teams = this.props.teams;
    const displayTeams = mapTeams(teams);

    //return the ReactElement
    return (
      <div className="display">
        <div className="teamList">{displayTeams}</div>
      </div>
    );
  }
}

export default Display;
