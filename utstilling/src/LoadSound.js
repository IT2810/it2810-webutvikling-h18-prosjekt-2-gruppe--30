import React from 'react';
import './Sound/seagull.mp3';


class LoadSound extends React.Component {
  constructor() {
    super();
    this.state = {selectedSound: "seagull"}
    this.playAudio = () => {
      switch(this.state.selectedSound) {
        case "seagull":
          this.seagull.play();
        default:
          this.seagull.play();
      }
    }
  }

  render() {
    return (
      <div>
        <audio ref={(seagull) => {this.seagull = seagull;}}>
          <source src='../sounds/music/1.mp3' type="audio/mpeg" ></source>
        </audio>
        <button className="btn btn-info" onClick={this.playAudio}>test sound</button>
      </div>

    )
  }


}

export default LoadSound
