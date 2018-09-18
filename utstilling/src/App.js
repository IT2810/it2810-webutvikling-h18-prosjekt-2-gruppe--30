import React, { Component } from 'react';
import './App.css';
import MediaList from './Components/MediaList';
import Title from "./Components/Title";
import Tabs from './Components/Tabs';
import FetchText from './Components/FetchText';
import LoadSound from './Components/LoadSound';

class App extends Component {
  constructor(props) {
    super(props);
    this.selectImgCat = this.selectImgCat.bind(this);
    this.selectTxtCat = this.selectTxtCat.bind(this);
    this.selectSoundCat = this.selectSoundCat.bind(this);

    this.state = {
      categoryTxt: '',
      categorySound: '',
      categoryImg: ''
    }
  }

  pauseOnChange = () => {
    this.loadSound1.pauseSound();
    this.loadSound2.pauseSound();
    this.loadSound3.pauseSound();
    this.loadSound4.pauseSound();
    console.log('YO');
  }

  // Lager en liste med 4 distinkte tall fra 1-4
  // Algoritme kilde: https://stackoverflow.com/questions/2380019/generate-unique-random-numbers-between-1-and-100
  distinct() {
    let indexArr = [];
    while(indexArr.length < 4) {
      let randomnumber = Math.floor(Math.random()*4) + 1;
      if (indexArr.indexOf(randomnumber) > -1) continue;
      indexArr[indexArr.length] = randomnumber;
    };
    return indexArr;
  }

  //Creates a list of four numbers in correct interval based on music category
  //This is because LoadSound needs a number between 1 and 12.
  randomizeSound() {
    let indexArr = this.distinct();
    let returnArr = []
    let increment = 0;
    switch (this.state.categorySound) {
      default:
        console.log("ERROR: No valid category");
      case "music":
        break;
      case "movies":
        increment = 4;
        break;
      case "animals":
        increment = 8;
        break;
    }
    while(returnArr.length < 4){
      returnArr[returnArr.length] = indexArr.pop() + increment;
    }
    return returnArr;
  }

  // Setter categoryImg state = category som er verdien sendt fra radio-knapp
  selectImgCat(category) {
    this.setState({
      categoryImg: category
    })
  }

  // Setter categoryTxt state = category som er verdien sendt fra radio-knapp
  selectTxtCat(category) {
    this.setState({
      categoryTxt: category
    })
  }

  // Setter categorySound state = category som er verdien sendt fra radio-knapp
  selectSoundCat(category) {
    this.setState({
      categorySound: category
    })
  }


  render() {
    const textArr = this.distinct();
    //const imageArr = this.distinct();
    const soundArr = this.randomizeSound();
    console.log(this.categorySound);
    console.log(soundArr);

	return (
	  <div className="App">
		  <Title/>
  		<Tabs pauseOnChange = {this.pauseOnChange}>
  		  <div tabname="Bilde 1">
          <FetchText path={this.state.categoryTxt} fileindex={textArr.pop()}/>
          <LoadSound ref={(ls1) => this.loadSound1 = ls1} caseindex={soundArr.pop()}/>
  		  </div>
  		  <div tabname="Bilde 2">
          <FetchText path={this.state.categoryTxt} fileindex={textArr.pop()}/>
          <LoadSound ref={(ls2) => this.loadSound2 = ls2} caseindex={soundArr.pop()}/>
  		  </div>
  		  <div tabname="Bilde 3">
          <FetchText path={this.state.categoryTxt} fileindex={textArr.pop()}/>
          <LoadSound ref={(ls3) => this.loadSound3 = ls3} caseindex={soundArr.pop()}/>
  		  </div>
  		  <div tabname="Bilde 4">
          <FetchText path={this.state.categoryTxt} fileindex={textArr.pop()}/>
          <LoadSound ref={(ls4) => this.loadSound4 = ls4} caseindex={soundArr.pop()}/>
  		  </div>
  		</Tabs>
      <MediaList selectImgCat={this.selectImgCat} selectTxtCat={this.selectTxtCat}
         selectSoundCat={this.selectSoundCat} pauseOnChange={this.pauseOnChange}/>
	  </div>
	);
  }
}

export default App;
