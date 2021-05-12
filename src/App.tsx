import "./App.css";
import React from "react";
import Display from "./components/Display";

interface AppProps {}

interface AppState {
  teams: {
    name: string;
    players: {
      name: string;
      score: number;
    }[];
  }[];
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      teams: new Array(7).fill({
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
      </div>
    );
  }
}

export default App;
