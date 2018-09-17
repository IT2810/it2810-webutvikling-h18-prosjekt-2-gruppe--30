import React from 'react';


class LoadSound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedSound: 3}
    this.playSound = this.playSound.bind(this);
    this.render = this.render.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.setState({
      selectedSound: this.props.caseindex
    })
  }

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
        this.three.play()
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
        <button className="btn btn-info" onClick={this.playSound}>test sound</button>
      </div>

    )
  }


}

export default LoadSound
