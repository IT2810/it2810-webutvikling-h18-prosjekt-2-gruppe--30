import React from 'react';
import Tab from './Tab';

import '../Styles/Tabs.css';

class Tabs extends React.Component {
  // Setter opp defaultProps:
  static defaultProps = {
    activetab: 0
  };

  // Setter init state og activeTab:
  constructor(props) {
    super(props);

    this.state = {
      activetab: props.activetab
    };
  }

  render() {
    const {activetab} = this.state;

    return (
      // Lager tab konteineren og card konteineren som tab-panel
      // {...this.props} = ES6 Spread operator
      // `string text ${expression}` = ES6 Template literals (Template strings)
      <div {...this.props} className={`tab-panel`}>
        <div className="tab-list">
          {React.Children.map(this.props.children, (child, i) => (
            <Tab onClick={this.onTabClick.bind(this, i)} {...child.props} tabindex={i} activetab={activetab}/>
          ))}
        </div>

        <div className="panel-content">
          {React.Children.map(this.props.children, (child, i) => {

            // Endrer isActive, så riktig css class blir brukt
            let isActive;
            if (i === activetab) {
                isActive = ' active';
            }
            else  {
              isActive = '';
            };

            const cardProps = {
              ...child.props,
              className: `panel${isActive}`,
              activetab: activetab
            };

            // Kloner og returnerer et nytt react element
            return React.cloneElement(child, cardProps);
          })}
        </div>
      </div>
    );
  }

  // Håndterer click på en tab og viser riktig aktive
  onTabClick(activetab) {
    this.setState({
      activetab
    });
  }
}

export default Tabs;
