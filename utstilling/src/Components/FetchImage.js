import React from 'react';

import '../Styles/FetchImage.css';

class FetchImage extends React.Component {
    state = {
        imageText: '',
        error: null,
        prevProps: this.props.path
    };

    fetchImage = () => {
        fetch(`./Image/${this.props.path}/${this.props.path}_${this.props.fileindex}.svg`)
            .then(response => response.text())
            .then(svg => this.setState({
                imageText: svg
            }))
            .catch(error => this.setState({error}));
    }

    componentDidMount() {
        if (this.props.path !== '') {
            this.fetchImage();
        }
        return;
    }

    componentDidUpdate(prevProps) {
        if (this.props.path !== prevProps.path){
            this.fetchImage();
        }
    }

    render() {
        const {imageText} = this.state;
        return (
            <React.Fragment>
                <div className="imageWrapper" dangerouslySetInnerHTML={{__html: imageText}}/>
            </React.Fragment>
        );
    }
}

export default FetchImage;