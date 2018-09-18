import React from 'react';
import  './MediaList.css';


class MediaList extends React.Component {
  constructor () {
    super();
    this.state = {selectedSound: "dyrelyder", selectedImage: "abstrakt", selectedText: "dikt"}
    this.handleChangeSound = this.handleChangeSound.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  };

  //Functions triggered by radio button change
  //Sets the relevant state based on the changed button's value

  handleChangeSound(event) {
    this.setState({selectedSound: event.target.value});
  }
  handleChangeImage(event) {
    this.setState({selectedImage: event.target.value});
  }
  handleChangeText(event){
    this.setState({selectedText: event.target.value});
  }

  //Radio buttons for each sub-category
  //Each button will change the component state when pushed, by calling above functions

  render() {
    return(
  <div>
    <form className="categorySound">
      <h4>Lyder</h4>
        <label className="button">
          <input type="radio" value="dyrelyder" checked={this.state.selectedSound === "dyrelyder"}
          onChange={this.handleChangeSound}/>
          Dyrelyder
        </label>

        <label className="button">
          <input type="radio" value="musikk" checked={this.state.selectedSound === "musikk"}
          onChange={this.handleChangeSound}/>
          Musikk
        </label>

      <label className="button">
        <input type="radio" value="film" checked={this.state.selectedSound === "film"}
        onChange={this.handleChangeSound}/>
        Film
      </label>
    </form>


    <form className="categoryImage">
      <h4>Bilder</h4>
      <div>
      <label className="button">
        <input type="radio" value="abstrakt" checked={this.state.selectedImage === "abstrakt"}
        onChange={this.handleChangeImage}/>
        Abstrakt
      </label>
    </div>

     <div>
      <label className="button">
        <input type="radio" value="Emojier" checked={this.state.selectedImage === "Emojier"}
        onChange={this.handleChangeImage}/>
        Emojier
      </label>
    </div>

    <div>
      <label className="button">
        <input type="radio" value="kommunevåpen" checked={this.state.selectedImage === "kommunevåpen"}
        onChange={this.handleChangeImage}/>
        Kommunevåpen
      </label>
    </div>
    </form>

    <form className="categoryText">
      <h4>Tekst</h4>
      <div>
      <label className="button">
        <input type="radio" value="dikt" checked={this.state.selectedText === "dikt"}
        onChange={this.handleChangeText}/>
        Dikt
      </label>
    </div>

     <div>

      <label className="button">
        <input type="radio" value="dumme inspirational quotes" checked={this.state.selectedText === "dumme inspirational quotes"}
        onChange={this.handleChangeText}/>
        Dumme Inspirational Quotes
      </label>
    </div>

    <div>
      <label className="button">
        <input type="radio" value="sitater" checked={this.state.selectedText === "sitater"}
        onChange={this.handleChangeText}/>
        Sitater
      </label>
    </div>
    </form>
  </div>
  )
  }

}

export default MediaList;
