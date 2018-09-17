import React, { Component } from 'react';
import './App.css';
import MediaList from './Components/MediaList';
import Title from "./Components/Title";
import Tabs from './Components/Tabs';
import FetchText from './Components/FetchText';

class App extends Component {
  constructor(props) {
    super(props);
    this.selectImgCat = this.selectImgCat.bind(this);
    this.selectTxtCat = this.selectTxtCat.bind(this);
    this.selectSoundCat = this.selectSoundCat.bind(this);

    this.state = {
      categoryTxt: ''
    }
  }

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

  selectImgCat(category) {
    this.categoryImg = category;
  }

  selectTxtCat(category) {
    //this.categoryTxt = category;
    this.setState({
      categoryTxt: category
    })
    console.log(this.state.category);
  }

  selectSoundCat(category) {
    this.categorySound = category;
  }

  render() {
    const textArr = this.distinct();
    //const soundArr = this.distinct();
    //const imageArr = this.distinct();
    //console.log(this.state.category);

	return (
	  <div className="App">
		  <Title/>
  		<Tabs>
  		  <div tabname="Bilde 1">
          <FetchText path={this.state.categoryTxt} fileindex={textArr.pop()}/>
  		  </div>
  		  <div tabname="Bilde 2">
          <FetchText path={this.state.categoryTxt} fileindex={textArr.pop()}/>
  		  </div>
  		  <div tabname="Bilde 3">
          <FetchText path={this.state.categoryTxt} fileindex={textArr.pop()}/>
  		  </div>
  		  <div tabname="Bilde 4">
          <FetchText path={this.state.categoryTxt} fileindex={textArr.pop()}/>
  		  </div>
  		</Tabs>
      <MediaList selectImgCat={this.selectImgCat} selectTxtCat={this.selectTxtCat} selectSoundCat={this.selectSoundCat}/>
	  </div>
	);
  }
}

export default App;
