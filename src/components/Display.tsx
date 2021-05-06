import React from 'react';
import { mapTeam } from '../components/Team';

interface DisplayProps {
  teams: {
    players: {
      score: number
    }[]
  }[],
  teamNames: {
    name: string,
    playerNames: {
      name: string
    }[],
  }[],
}

interface DisplayState {
}

class Display extends React.Component<DisplayProps, DisplayState>{

  render() {
    const currentRound = this.props.teams;
    const teamNames = this.props.teamNames;
    const displayTeams = mapTeam(currentRound, teamNames);

    return (
      <div className="display">
        <ol className="teamList">
          {displayTeams}
        </ol>
      </div>
    );
  }
}

export default Display;
