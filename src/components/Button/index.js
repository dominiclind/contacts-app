import React from 'react';
import Ionicon from 'react-ionicons';
import './_button.scss';

export default (props) => (
  <button
    className={`button ${props.icon ? 'has-icon' : ''} ${props.type ? props.type : ''} ${props.small ? 'small' : ''} ${props.inverted ? 'inverted' : ''}`} 
    onClick={props.onClick}
  >
  	{props.icon ? (<Ionicon className="icon" icon={props.icon} />) : null} 
    <span>{props.children}</span>
  	
  </button>
);