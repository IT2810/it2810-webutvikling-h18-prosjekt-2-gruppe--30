import React, { Component } from 'react';
import './App.css';
import MediaList from './Components/MediaList';
import Title from "./Components/Title";
import Tabs from './Components/Tabs';
import FetchText from './Components/FetchText';

class App extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
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

  onChange() {
    console.log("test");
  }

  render() {
    const textArr = this.distinct();
    //const soundArr = this.distinct();
    //const imageArr = this.distinct();

	return (
	  <div className="App">
		  <Title/>
  		<Tabs>
  		  <div tabname="Bilde 1">
          <FetchText path={"quote"} fileindex={textArr.pop()}/>
  		  </div>
  		  <div tabname="Bilde 2">
          <FetchText path={"quote"} fileindex={textArr.pop()}/>
  		  </div>
  		  <div tabname="Bilde 3">
          <FetchText path={"quote"} fileindex={textArr.pop()}/>
  		  </div>
  		  <div tabname="Bilde 4">
          <FetchText path={"quote"} fileindex={textArr.pop()}/>
  		  </div>
  		</Tabs>
      <MediaList>
        <label>
          <input onChange={this.onChange}/>
        </label>
      </MediaList>
	  </div>
	);
  }
}

export default App;
