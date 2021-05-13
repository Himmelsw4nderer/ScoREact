import React from "react";

//the datastructure for the props
interface MoveProps {
  newScore: number;
  oldScore: number;
  addedScore: number;
  teamName: string;
  playerName: string;
}

//crates a list of ReactElements from an array of moves
function mapMoves(
  moves: {
    newScore: number;
    oldScore: number;
    addedScore: number;
    teamName: string;
    playerName: string;
  }[]
) {
  //create empty array
  let displayMoves: {}[] = [];

  //add a ReactElement with given data to the empty array for each element in the list
  for (let move of moves) {
    displayMoves.push(
      <Move
        newScore={move.newScore}
        oldScore={move.oldScore}
        addedScore={move.addedScore}
        teamName={move.teamName}
        playerName={move.playerName}
      />
    );
  }

  //return the array
  return displayMoves;
}

class Move extends React.Component<MoveProps> {
  //rendering the React Element
  render() {
    //setting up variables
    const newScore = this.props.newScore;
    const oldScore = this.props.oldScore;
    const addedScore = this.props.addedScore;
    const teamName = this.props.teamName;
    const playerName = this.props.playerName;


    //return the ReactElement
    return (
      <div className="move">
        <div className="moveText">
          from {oldScore} to {newScore} added {addedScore} to {playerName} in{" "}
          {teamName}
        </div>
      </div>
    );
  }
}

export { Move, mapMoves };
