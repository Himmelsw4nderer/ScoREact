import React from "react";

interface PlayerProps {
  name: string;
  score: number;
}

function mapPlayer(
  players: {
    score: number;
    name: string;
  }[]
) {
  let displayPlayer: {}[] = [];

  for (let pos in players) {
    displayPlayer.push(
      <Player name={players[pos].name} score={players[pos].score} />
    );
  }

  return displayPlayer;
}

class Player extends React.Component<PlayerProps> {
  render() {
    return (
      <div className="player">
        <h4 className="name">{this.props.name}</h4>
        <h4 className="score">{this.props.score}</h4>
      </div>
    );
  }
}

export { Player, mapPlayer };
