import React from 'react';


class LoadSound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedSound: 0}
    this.playSound = this.playSound.bind(this);
    this.render = this.render.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  //The state selectedSound is based on a prop received from App
  //TODO Probably does not work more than first render
  componentDidMount() {
    this.setState({
      selectedSound: this.props.caseindex
    })
  }


  //Function triggered by button.
  //Plays a sound file based on the state selectedSound.
  playSound() {

    console.log(this.props.caseindex);
    console.log(this.state);
    console.log(this.state.selectedSound);
    switch(this.state.selectedSound) {
      case 1:
        this.one.play();
        break;
      case 2:
        this.two.play();
        break;
      case 3:
        this.three.play();
        break;
      case 4:
        this.four.play();
        break;
      case 5:
        this.five.play();
        break;
      case 6:
        this.six.play();
        break;
      case 7:
        this.seven.play();
        break;
      case 8:
        this.eight.play();
        break;
      case 9:
        this.nine.play();
        break;
      case 10:
        this.ten.play();
        break;
      case 11:
        this.eleven.play();
        break;
      case 12:
        this.twelve.play();
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <audio ref={(one) => {this.one = one;}}>
          <source src='../sounds/music/1.mp3' type="audio/mpeg" ></source>
        </audio>
        <audio ref={(two) => {this.two = two;}}>
          <source src='../sounds/music/2.mp3' type="audio/mpeg" ></source>
        </audio>
        <audio ref={(three) => {this.three = three;}}>
          <source src='../sounds/music/3.mp3' type="audio/mpeg" ></source>
        </audio>
        <audio ref={(four) => {this.four = four;}}>
          <source src='../sounds/music/4.mp3' type="audio/mpeg" ></source>
        </audio>
        <audio ref={(five) => {this.five = five;}}>
          <source src='../sounds/movies/1.mp3' type="audio/mpeg" ></source>
        </audio>
        <audio ref={(six) => {this.six = six;}}>
          <source src='../sounds/movies/2.mp3' type="audio/mpeg" ></source>
        </audio>
        <audio ref={(seven) => {this.seven = seven;}}>
          <source src='../sounds/movies/3.mp3' type="audio/mpeg" ></source>
        </audio>
        <audio ref={(eight) => {this.eight = eight;}}>
          <source src='../sounds/movies/4.mp3' type="audio/mpeg" ></source>
        </audio>
        <audio ref={(nine) => {this.nine = nine;}}>
          <source src='../sounds/animals/1.mp3' type="audio/mpeg" ></source>
        </audio>
        <audio ref={(ten) => {this.ten = ten;}}>
          <source src='../sounds/animals/2.mp3' type="audio/mpeg" ></source>
        </audio>
        <audio ref={(eleven) => {this.eleven = eleven;}}>
          <source src='../sounds/animals/3.mp3' type="audio/mpeg" ></source>
        </audio>
        <audio ref={(twelve) => {this.tweleve = twelve;}}>
          <source src='../sounds/animals/4.mp3' type="audio/mpeg" ></source>
        </audio>
        <button className="btn btn-info" onClick={this.playSound}>Play sound</button>
      </div>

    )
  }


}

export default LoadSound
