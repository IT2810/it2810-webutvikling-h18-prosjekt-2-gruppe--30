import React, { Component } from 'react';
import './App.css';
import MediaList from './Components/MediaList';
import Title from "./Components/Title";
import Tabs from './Components/Tabs';
import FetchText from './Components/FetchText';
import LoadSound from '.Components/LoadSound';

class App extends Component {
  constructor(props) {
    super(props);
    this.selectImgCat = this.selectImgCat.bind(this);
    this.selectTxtCat = this.selectTxtCat.bind(this);
    this.selectSoundCat = this.selectSoundCat.bind(this);

    this.state = {
      categoryTxt: '',
      categorySound: 'movies',
      categoryImg: ''
    }
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

  // Generates four distinct random numbers for the LoadSound component
  randomizeSound() {
    let indexArr = [];
    while(indexArr.length < 4) {
      let randomnumber = Math.floor(Math.random()*4) + 1;
      if (indexArr.indexOf(randomnumber) > -1) continue;
      //TODO Basert på valgt kategori: Legg til 0, 4 eller 8
      //this switch may or may not work. Depends on how the selected category is represented
      switch(this.state.categorySound) {
        default:
          console.log('ERROR: no valid category');
          break;
        case "music":
          break;
        case "movies":
          randomnumber = randomnumber + 4;
          break;
        case "animals":
          randomnumber = randomnumber + 8;
          break;
      }
      indexArr[indexArr.length] = randomnumber;
    }
    return indexArr;
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

	return (
	  <div className="App">
		  <Title/>
  		<Tabs>
  		  <div tabname="Bilde 1">
          <FetchText path={this.state.categoryTxt} fileindex={textArr.pop()}/>
          <LoadSound caseindex={soundArr.pop()}/>
  		  </div>
  		  <div tabname="Bilde 2">
          <FetchText path={this.state.categoryTxt} fileindex={textArr.pop()}/>
          <LoadSound caseindex={soundArr.pop()}/>
  		  </div>
  		  <div tabname="Bilde 3">
          <FetchText path={this.state.categoryTxt} fileindex={textArr.pop()}/>
          <LoadSound caseindex={soundArr.pop()}/>
  		  </div>
  		  <div tabname="Bilde 4">
          <FetchText path={this.state.categoryTxt} fileindex={textArr.pop()}/>
          <LoadSound caseindex={soundArr.pop()}/>
  		  </div>
  		</Tabs>
      <MediaList selectImgCat={this.selectImgCat} selectTxtCat={this.selectTxtCat} selectSoundCat={this.selectSoundCat}/>
	  </div>
	);
  }
}

export default App;
