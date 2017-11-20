import React, {Component} from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import Toast from '../components/Toast';

import {hideMessage} from '../actions/ui'

class App extends Component {

	componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

	render() {
		const { props } = this;
		return (
			<div>
				<Toast
					onClick={() => props.dispatch(hideMessage())}
					message={props.ui.message}
				/>
				{props.children}
			</div>
		)
	}
}
const mapStateToProps = state => ({
  ui: state.ui
})

export default withRouter(connect(mapStateToProps)(App));