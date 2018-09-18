import React, { Component } from 'react';
import './App.css';
import MediaList from './Components/MediaList';
import Title from "./Components/Title";
import Tabs from './Components/Tabs';
import FetchText from './Components/FetchText';
import FetchImage from "./Components/FetchImage";

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
    const imageArr = this.distinct();

	return (
	  <div className="App">
		  <Title/>
  		<Tabs>
  		  <div tabname="Bilde 1">
              <FetchImage path={this.state.categoryImg} fileindex={imageArr.pop()}/>
              <FetchText path={this.state.categoryTxt} fileindex={textArr.pop()}/>
  		  </div>
  		  <div tabname="Bilde 2">
              <FetchImage path={this.state.categoryImg} fileindex={imageArr.pop()}/>
              <FetchText path={this.state.categoryTxt} fileindex={textArr.pop()}/>
  		  </div>
  		  <div tabname="Bilde 3">
              <FetchImage path={this.state.categoryImg} fileindex={imageArr.pop()}/>
              <FetchText path={this.state.categoryTxt} fileindex={textArr.pop()}/>
  		  </div>
  		  <div tabname="Bilde 4">
              <FetchImage path={this.state.categoryImg} fileindex={imageArr.pop()}/>
              <FetchText path={this.state.categoryTxt} fileindex={textArr.pop()}/>
  		  </div>
  		</Tabs>
      <MediaList selectImgCat={this.selectImgCat} selectTxtCat={this.selectTxtCat} selectSoundCat={this.selectSoundCat}/>
	  </div>
	);
  }
}

export default App;
