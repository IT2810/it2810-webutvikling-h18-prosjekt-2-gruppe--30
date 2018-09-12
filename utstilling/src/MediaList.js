import React from 'react';


class MediaList extends React.Component {
  constructor () {
    super();
    this.state = {selected: "option1"}
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    this.setState({selected: event.target.value});
  }

  render() {
    return(
    <form>
      <div>
      <label>
        <input type="radio" value="option1" checked={this.state.selected === "option1"}
        onChange={this.handleChange}/>
        1
      </label>
    </div>

     <div>

      <label>
        <input type="radio" value="option2" checked={this.state.selected === "option2"}
        onChange={this.handleChange}/>
        2
      </label>
    </div>

    <div>
      <label>
        <input type="radio" value="option3" checked={this.state.selected === "option3"}
        onChange={this.handleChange}/>
        3
      </label>
    </div>
    </form>
  )
  }

}

export default MediaList;
