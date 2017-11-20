import React, {Component} from 'react'
import { TwitterPicker } from 'react-color';

import './_color-input.scss';

export default class ColorPicker extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	show: false
	  };
	}

	render(){
		const { props } = this;

		return (
			<a
				className={`color-input ${props.icon ? 'has-icon' : ' '} ${this.state.show ? 'focus' : ' '}`}
				onClick={() => this.setState({show: !this.state.show})}
			>
				<div className={`color-blob ${props.value ? '' : 'empty'}`} style={{backgroundColor: '#'+props.value}}>{this.state.show}</div>
			  <input
			  	readOnly
			  	placeholder={props.placeholder}
			  	type={props.type || 'text'} 
			  	value={props.value}
			  	onChange={(e) => props.onChange(e.target.value)}
			  />
			  {this.state.show ? (
			  <div className="picker">
				  <TwitterPicker
			      color={ props.value }
			      onChangeComplete={ (color) => props.onChange(color.hex.substring(1))}
			    />
		    </div>
		    ): null}
			</a>
		)
	}

}
