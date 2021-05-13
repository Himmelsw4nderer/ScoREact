import "./App.css";
import React from "react";
import Display from "./components/Display";
import InputBar from "./components/InputBar";

interface AppProps {}

interface AppState {
  teams: {
    score: number;
    name: string;
    players: {
      score: number;
      name: string;
    }[];
  }[];
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      teams: new Array(7).fill({
        score: 0,
        name: "teamname",
        players: new Array(2).fill({
          name: "playername",
          score: 0
        })
      })
    };
  }

  render() {
    const teams = this.state.teams;

    return (
      <div className="app">
        <Display teams={teams} />
        <InputBar/>
      </div>
    );
  }
}

export default App;
