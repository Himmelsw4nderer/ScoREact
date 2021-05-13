import React from 'react';
import { mapMoves } from "./Move";

//the datastructure for the props
interface MoveListProps {
  moves: {
    newScore: number;
    oldScore: number;
    addedScore: number;
    teamName: string;
    playerName: string;
  }[];
}

export default class MoveList extends React.Component<MoveListProps> {
  //rendering the React Element
  render() {
    //setting up variables
    let displayMoves = mapMoves(this.props.moves);

    //return the ReactElement
    return <div className="MoveList">{displayMoves}</div>;
  }
}