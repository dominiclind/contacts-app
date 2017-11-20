import React, { Component } from 'react';
import { connect } from 'react-redux'

import Button from '../../components/Button';

import './_not-found.scss';

class NotFound extends Component {
	
  render() {
  	return (
      <div className="not-found">
        <h1>Page not found</h1>
        <Button
          inverted
          onClick={() => this.props.history.push('/')}
          icon="ios-arrow-round-back"
        >
          Back to contacts
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
  auth: state.auth
})

export default connect(mapStateToProps)(NotFound);