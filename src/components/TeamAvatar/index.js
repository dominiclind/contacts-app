import React from 'react'
import './_team-avatar.scss';

export default (props) => (
	<div className={`team-avatar ${props.small ? 'small' : ' '}`}>
		{props.image ? (
			<img className="img" alt={`${props.initials}`} src={props.image} />
		) : (
			<p className="letters">{props.initials}</p>
		)}
    {props.color ? (

      <div className="pos-abs color" style={{backgroundColor: '#' + props.color}}></div>
    ) : null}
	</div>
);