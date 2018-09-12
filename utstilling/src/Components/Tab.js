import React from 'react';
import '../Styles/tab.css';

const Tab = props => {
  let {tabname, activetab, tabindex, onClick} = props, isActive;

  // Når activetab og tabindex er like, settes isActive til .tab.active
  if (activetab === tabindex) {
    isActive = ' active';
  }
  else {
    isActive = '';
  };

  // Definerer og rendrer formen på en tab
  return (
    <div className={`tab${isActive}`} onClick={onClick}>
      {tabname}
    </div>
  );
};

export default Tab;
