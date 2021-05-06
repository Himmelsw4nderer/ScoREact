import React from 'react';

interface PlayerProps {
    name: string;
    score: number;
}

function mapPlayer(
    players: {
        score: number
    }[],
    playerNames: {
        name: string
    }[],
) {

    let displayPlayer: {}[] = [];

    if (players.length !== playerNames.length) {
        return displayPlayer;
    }

    for (let pos in players) {
        displayPlayer.push(
            <Player name={playerNames[pos].name} score={players[pos].score} />
        );
    }

    return displayPlayer;
}

class Player extends React.Component<PlayerProps>{
    render() {
        return (
            <li>
                <div className="player">
                    <h2 className="name">
                        {this.props.name}
                    </h2>
                    <h2 className="score">
                        {this.props.score}
                    </h2>
                </div>
            </li>
        );
    }
}

export { Player, mapPlayer }