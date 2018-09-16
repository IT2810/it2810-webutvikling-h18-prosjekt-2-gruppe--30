import React from 'react';
import '../Styles/MediaList.css';


class MediaList extends React.Component {
  constructor () {
    super();
    this.state = {selectedSound: "dyrelyder", selectedImage: "abstrakt", selectedText: "poem"}
    this.handleChangeSound = this.handleChangeSound.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  };

  handleChangeSound(event) {
    this.setState({selectedSound: event.target.value});
  }
  handleChangeImage(event) {
    this.setState({selectedImage: event.target.value});
  }
  handleChangeText(event){
    this.setState({selectedText: event.target.value});
  }

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
