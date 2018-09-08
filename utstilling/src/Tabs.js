import React from 'react';
import Tab from './Tab';

import './Tabs.css';

class Tabs extends React.Component {
  // Setter opp defaultProps:
  static defaultProps = {
    activetab: 0,
    className: ''
  };

  // Setter init state og activeTab:
  constructor(props) {
    super(props);

    this.state = {
      activetab: props.activetab
    };
  }

  render() {
    const {children, className} = this.props;
    const {activetab} = this.state;

    return (
      // Lager tab konteineren og card konteineren som tab-panel
      // {...this.props} = ES6 Spread operator
      // `string text ${expression}` = ES6 Template literals (Template strings)
      <div {...this.props} className={`${className} tab-panel `}>
        <div className="tab-list">
          {React.Children.map(children, (child, i) => (
            <Tab
              onClick={this.onTabClick.bind(this, i)}
              {...child.props}
              cardindex={i}
              activetab={activetab}
            />
          ))}
        </div>
        <div className="card-content">
          {React.Children.map(children, (child, i) => {
            let {className} = child.props;

            if (className) {
              className = ` ${className}`;
            }
            else {
              className = '';
            };

            let isActive;
            if (i === activetab) {
                isActive = ' active';
            }
            else  {
              isActive = '';
            };

            const cardProps = {
              ...child.props,
              className: `card${className}${isActive}`,
              cardindex: i,
              activetab: activetab
            };

            // Kloner og returnerer et nytt react element
            return React.cloneElement(child, cardProps);
          })}
        </div>
      </div>
    );
  }

  // Håndterer click på en tab og viser riktig aktive child (render metoden)
  onTabClick(activetab) {
    this.setState({
      activetab
    });
  }
}

export default Tabs;
