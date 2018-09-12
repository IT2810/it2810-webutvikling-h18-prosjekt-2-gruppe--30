import React, { Component } from 'react';
import './App.css';
import MediaList from './Components/MediaList';
import Title from "./Components/Title";
import Tabs from './Components/Tabs';

class App extends Component {

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
	  </div>
	);
  }
}

export default App;
