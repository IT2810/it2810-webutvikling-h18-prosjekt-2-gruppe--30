import React, { Component } from 'react';
import './App.css';
import MediaList from './Components/MediaList';
import Title from "./Components/Title";
import Tabs from './Components/Tabs';
import LoadSound from './LoadSound.js';

class App extends Component {

  randomizeMusic() {
    let indexArr = [];
    while(indexArr.length < 4) {
      let randomnumber = Math.floor(Math.random()*4) + 1;
      if (indexArr.indexOf(randomnumber) > -1) continue;
      //TODO Basert på valgt kategori: Legg til 0, 4 eller 8
      //this switch may or may not work. Depends on how the selected category is represented
      switch(this.categorySound) {
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

  render() {
	return (
	  <div className="App">
		  <Title/>
		<Tabs>
		  <div tabname="Bilde 1">
			Dette er bilde 1
		  </div>
		  <div tabname="Bilde 2">
			Dette er bilde 2
		  </div>
		  <div tabname="Bilde 3">
			Dette er bilde 3
		  </div>
		  <div tabname="Bilde 4">
			Dette er bilde 4
		  </div>
		</Tabs>
    <MediaList/>
    <LoadSound caseindex={8}/>
	  </div>
	);
  }
}

export default App;
