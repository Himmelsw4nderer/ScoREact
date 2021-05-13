import React from "react";

//the datastructure for the props
interface InputBarProps {}

export default class InputBar extends React.Component<InputBarProps> {
  //rendering the React Element
  render() {
    //return the ReactElement
    return (
      <div className="InputBar">
        <button>Add Player</button>
        <button>Remove Player</button>
        <button>AddPlayer</button>
        <button>AddPlayer</button>
      </div>
    );
  }
}
