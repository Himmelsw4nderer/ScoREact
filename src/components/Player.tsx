import React from "react";

//the datastructure for the props
interface PlayerProps {
  name: string;
  score: number;
}

//crates a list of ReactElements from an array of players
function mapPlayers(
  players: {
    score: number;
    name: string;
  }[]
) {

  //create empty array
  let displayPlayer: {}[] = [];

  //add a ReactElement with given data to the empty array for each element in the list
  for (let player of players) {
    displayPlayer.push(<Player name={player.name} score={player.score} />);
  }

  //return the array
  return displayPlayer;
}

class Player extends React.Component<PlayerProps> {
  //rendering the React Element
  render() {
    //return the ReactElement
    return (
      <div className="player">
        <div className="name">{this.props.name}:</div>
        <div className="score">{this.props.score}</div>
      </div>
    );
  }
}

export { Player, mapPlayers };
