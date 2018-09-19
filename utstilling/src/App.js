import React, { Component } from 'react';
import './App.css';
import MediaList from './Components/MediaList';
import Title from "./Components/Title";
import Tabs from './Components/Tabs';
import TabContent from "./Components/TabContent";
import Utils from "./utils";

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
  }

  // Set categoryImg using value of radio-buttons. Passed from _MediaList_ using props
  selectImgCat(category) {
    this.setState({
      categoryImg: category
    })
  }

    // Set categoryTxt using value of radio-buttons. Passed from _MediaList_ using props
  selectTxtCat(category) {
    this.setState({
      categoryTxt: category
    })
  }

  // Set categorySound using value of radio-buttons. Passed from _MediaList_ using props
  selectSoundCat(category) {
    this.setState({
      categorySound: category
    })
  }

  render() {
      // Uses random arrays to decide what image/text/sound shows in each tab. Passed to _TabContent_ using randomArr-prop
      const soundArr = Utils.randomizeSound(this.state.categorySound);
      const randomArr = [Utils.distinct(), Utils.distinct(), soundArr]

      return (
          <div className="App">
              <Title/>
              <div className="grid grid-float flex-grid">
                  <div className="box-1">
                      <MediaList selectImgCat={this.selectImgCat} selectTxtCat={this.selectTxtCat}
                                 selectSoundCat={this.selectSoundCat} pauseOnChange={this.pauseOnChange}/>
                  </div>
                  <div className="box-2">
                      <Tabs pauseOnChange={this.pauseOnChange}>
                          <div tabname="Bilde 1">
                              <TabContent imgPath={this.state.categoryImg} txtPath={this.state.categoryTxt} reff={(ls1) => this.loadSound1 = ls1} randomArr={randomArr}/>
                          </div>
                          <div tabname="Bilde 2">
                              <TabContent imgPath={this.state.categoryImg} txtPath={this.state.categoryTxt} reff={(ls2) => this.loadSound2 = ls2} randomArr={randomArr}/>
                          </div>
                          <div tabname="Bilde 3">
                              <TabContent imgPath={this.state.categoryImg} txtPath={this.state.categoryTxt} reff={(ls3) => this.loadSound3 = ls3} randomArr={randomArr}/>
                          </div>
                          <div tabname="Bilde 4">
                              <TabContent imgPath={this.state.categoryImg} txtPath={this.state.categoryTxt} reff={(ls4) => this.loadSound4 = ls4} randomArr={randomArr}/>
                          </div>
                      </Tabs>
                  </div>
              </div>
          </div>
      );
  }
}

export default App;
