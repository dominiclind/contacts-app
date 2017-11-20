import React from 'react'
import Ionicon from 'react-ionicons';
import './_toast.scss';

export default (props) => (
	<div 
		className={`toast ${props.message ? '' : 'hidden'}`}
		onClick={props.onClick}
	>	
		<p> </p>
		<p>{props.message}</p>
		<div className="right">
			<Ionicon icon="md-close" className="icon"/>
			<p className="">Close</p>
		</div>
	</div>
)