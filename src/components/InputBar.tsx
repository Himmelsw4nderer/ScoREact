import React from 'react';

interface InputBarProps {

}

interface InputBarState {

}

export default class InputBar extends React.Component<InputBarProps, InputBarState> {
    render(){
        return(
            <div className="InputBar">
                <button>Add Player</button>
                <button>Remove Player</button>
                <button>AddPlayer</button>
                <button>AddPlayer</button>
            </div>
        );
    }
}