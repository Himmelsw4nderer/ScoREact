import React from 'react';
import {mapPlayer} from './Player'

interface TeamProps {
    players: {score: number }[];
    playerNames: {name: string}[];
    name: string;
}

function mapTeam(
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
) {

    let displayTeams: {}[] = [];

    if (teams.length !== teamNames.length) {
        return displayTeams;
    }

    for (let pos in teams) {
        displayTeams.push(
            <Team players={teams[pos].players} playerNames={teamNames[pos].playerNames} name={teamNames[pos].name}/>
        );
    }


    return displayTeams;
}

class Team extends React.Component<TeamProps>{
    render() {

        const players = this.props.players;
        let displayPlayers: any = [];

        if (players.length !== 0) {
            const playerNames = this.props.playerNames;
            displayPlayers = mapPlayer(players, playerNames);
        }

        
        return (
            <li className="team">
                <h1 className="teamName">
                    {this.props.name}
                </h1>
                <ol className="playerList">
                    {displayPlayers}
                </ol>
            </li>
        );
    }
}

export {Team, mapTeam};