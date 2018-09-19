import React from 'react';

import '../Styles/TabContent.css'

import FetchImage from "./FetchImage";
import FetchText from "./FetchText";
import LoadSound from "./LoadSound";

// This class uses props from _App_ to set content in each tab using components for text,image and sound.
class TabContent extends React.Component {

    render () {
        return (
            <div className={"Tab-wrapper"}>
                <FetchImage path={this.props.imgPath} fileindex={this.props.randomArr[0].pop()}/>
                <FetchText path={this.props.txtPath} fileindex={this.props.randomArr[1].pop()}/>
                <LoadSound ref={this.props.reff} caseindex={this.props.randomArr[2].pop()}/>
            </div>
        );
    }
}

export default TabContent;