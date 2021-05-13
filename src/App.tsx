import "./App.css";
import React from "react";
import Display from "./components/Display";
import InputBar from "./components/InputBar";
import MoveList from "./components/MoveList";

//the datastructure for the props
interface AppProps {}

//the datastructure for the state
interface AppState {
  teams: {
    score: number;
    name: string;
    players: {
      score: number;
      name: string;
    }[];
  }[];

  moves: {
    newScore: number;
    oldScore: number;
    addedScore: number;
    teamName: string;
    playerName: string;
  }[];
}

class App extends React.Component<AppProps, AppState> {

  //construckts an empty App component
  constructor(props: any) {
    super(props);
    this.state = {
      teams: new Array(7).fill({
        score: 0,
        name: "[teamname]",
        players: new Array(2).fill({
          name: "[playername]",
          score: 0
        })
      }),

      moves: new Array(7).fill({
        newScore: 0,
        oldScore: 0,
        addedScore: 0,
        teamName: "[teamname]",
        playerName: "[playername]"
      })
    };
  }

  //rendering the React Element
  render() {
    //setting up variables
    const teams = this.state.teams;
    const moves = this.state.moves;

    //return the ReactElement
    return (
      <div className="app">
        <Display teams={teams} />
        <InputBar />
        <MoveList moves={moves} />
      </div>
    );
  }
}

export default App;
