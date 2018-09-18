import React from 'react';

import '../Styles/FetchImage.css';

class FetchImage extends React.Component {
    state = {
        isLoading: true,
        imageText: '',
        error: null,
        prevProps: this.props.path
    };

    fetchImage() {
        fetch(`../Image/${this.props.path}/${this.props.path}_${this.props.fileindex}.svg`)
            .then(response => response.text())
            .then(svg => this.setState({
                imageText: svg,
                isLoading: false
            }))
            .catch(error => this.setState({error, isLoading: false}));
    }

    componentDidMount() {
        this.fetchImage();
    }

    componentDidUpdate(prevProps) {
        if (this.props.path !== prevProps.path){
            this.fetchImage();
        }
    }

    render() {
        const {isLoading, imageText, error} = this.state;
        return (
            <React.Fragment>
                {/* Display a message if we encounter an error */}
                {error ? <p>{error.message}</p> : null}

                {/* Here's our data check */}
                {!isLoading ? (
                    <div className="imageWrapper" dangerouslySetInnerHTML={{__html: imageText}}/>
                ) : (
                    // If there is a delay in data, let's let the user know it's loading
                    <h3>Loading...</h3>
                )}
            </React.Fragment>
        );
    }
}

export default FetchImage;