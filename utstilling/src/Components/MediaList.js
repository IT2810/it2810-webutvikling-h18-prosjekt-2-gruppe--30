import React from 'react';
import '../Styles/MediaList.css';


class MediaList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {selectedSound: "", selectedImage: "", selectedText: ""}
    this.handleChangeSound = this.handleChangeSound.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  };

  //Functions triggered when radio buttons are clicked
  //Ensures that the states in App.js corresponds with the selected buttons
  handleChangeSound(event) {
    this.setState({selectedSound: event.target.value});
    this.props.selectSoundCat(event.target.value);
    //When a different sound category is selected, sound should stop playing
    this.props.pauseOnChange();
  }
  handleChangeImage(event) {
    this.setState({selectedImage: event.target.value});
    this.props.selectImgCat(event.target.value);
  }
  handleChangeText(event){
    this.setState({selectedText: event.target.value});
    this.props.selectTxtCat(event.target.value);
  }

  //Renders the radio buttons
  //The value the buttons is used in the change handler to set correct state in App.js
  render() {
    return(
  <div>
    <form className="categorySound">
      <h4>Lyder</h4>
        <label className="button">
          <input type="radio" value="animals" checked={this.state.selectedSound === "animals"}
          onChange={this.handleChangeSound}/>
          Dyrelyder
        </label>

        <label className="button">
          <input type="radio" value="music" checked={this.state.selectedSound === "music"}
          onChange={this.handleChangeSound}/>
          Musikk
        </label>

      <label className="button">
        <input type="radio" value="movies" checked={this.state.selectedSound === "movies"}
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
        <input type="radio" value="emoji" checked={this.state.selectedImage === "emoji"}
        onChange={this.handleChangeImage}/>
        Emojier
      </label>
    </div>

    <div>
      <label className="button">
        <input type="radio" value="kommunevapen" checked={this.state.selectedImage === "kommunevapen"}
        onChange={this.handleChangeImage}/>
        Kommunevåpen
      </label>
    </div>
    </form>

    <form className="categoryText">
      <h4>Tekst</h4>
      <div>
      <label className="button">
        <input type="radio" value="poem" checked={this.state.selectedText === "poem"}
        onChange={this.handleChangeText}/>
        Dikt
      </label>
    </div>

     <div>

      <label className="button">
        <input type="radio" value="gibberish" checked={this.state.selectedText === "gibberish"}
        onChange={this.handleChangeText}/>
        Svada
      </label>
    </div>

    <div>
      <label className="button">
        <input type="radio" value="quote" checked={this.state.selectedText === "quote"}
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
