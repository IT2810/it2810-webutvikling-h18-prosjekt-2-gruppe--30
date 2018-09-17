import React from 'react';

import '../Styles/FetchText.css';

class FetchText extends React.Component {
  state = {
    texts: [],
    error: null,
    prevProps: this.props.path
  }

  fetchText = () => {
    fetch(`../Text/${this.props.path}/${this.props.path}_${this.props.fileindex}.json`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          texts: data,
        })
      )
      .catch(error => this.setState({error}));
  }

  componentDidMount() {
    this.fetchText();
  }

  componentDidUpdate(prevProps) {
    if (this.props.path !== prevProps.path) {
      console.log(this.props.path, prevProps.path);
      this.fetchText();
    }
  }

  render() {
    const {texts, error} = this.state;

    return (
      <React.Fragment>
        {error ? <p>Error: {error.message}</p> : null}

        {(
          texts.map(txt => {
            const {id, text, credit} = txt;
            return (
              <div className="wrapper" key={id}>
                <p>{text}</p>
                <p><i>– {credit}</i></p>
                <br />
              </div>
            );
          })
        )}
      </React.Fragment>
    );
  };
}

export default FetchText;
