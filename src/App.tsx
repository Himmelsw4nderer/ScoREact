import './App.css';
import React from 'react';
import Display from './components/Display'

interface AppProps {
}

interface AppState {
    rounds: {
        teams: {
            players: {
                score: number
            }[]
        }[]
    }[],
    teamNames: {
        name: string,
        playerNames: {
            name: string
        }[],
    }[],
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            rounds: new Array(1).fill({teams: new Array(5).fill({ players: new Array(3).fill({ score: 0 }) }) }),
            teamNames: new Array(5).fill({name: "teamname", playerNames: new Array(3).fill({ name: "playername" }) }),
        };
    }

    render() {
        const teamNames = this.state.teamNames;
        const rounds = this.state.rounds;

        let currentRound = new Array(1).fill({players: new Array(1).fill({score: 0})});

        if (rounds.length !== 0) {
            currentRound = rounds[rounds.length - 1].teams;
        }

        return(
            <div className="app">
                <Display teams={currentRound} teamNames={teamNames}/>
            </div>
        );
    }
}

export default App