import React from 'react';
import './tab.css';

const Tab = props => {
  let {tabname, activetab, cardindex, onClick} = props, isActive;

  // Når activetab og cardindex er like, settes isActive til .tab.active
  if (activetab === cardindex) {
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
