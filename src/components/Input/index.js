import React, {Component} from 'react'
import Ionicon from 'react-ionicons'
import './_input.scss';

export default class Input extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	focus: false
	  };
	}

	render(){
		const {props} = this;

		return(
			<div className={`input ${props.icon ? 'has-icon' : ' '} ${this.state.focus ? 'focus' : ' '}`}>
				{props.icon ? (
					<Ionicon 
						icon={props.icon}
						className="pos-abs icon"
					/>
				) : null}
			  <input
			  	readOnly={props.readOnly}
			  	placeholder={props.placeholder}
			  	type={props.type || 'text'} 
			  	value={props.value}
			  	onChange={(e) => props.readOnly ? false : props.onChange(e.target.value)}
			  	onFocus={() => {
			  		this.setState({focus: true})
			  		if(props.onBlurChange){
			  			props.onBlurChange(true);
			  		}
			  	}}
			  	onBlur={() => {
			  		this.setState({focus: false})
		  			if(props.onBlurChange){
			  			props.onBlurChange(false);
			  		}
			  	}}	
			  />
			</div>
		)
	}
}