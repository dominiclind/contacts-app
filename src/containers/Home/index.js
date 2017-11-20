import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getContacts } from '../../actions/contacts';
import {login, logout} from '../../actions/auth';

import Header from '../../components/Header'
import TeamList from '../../components/TeamList';

import search from '../../utils/search';

class Home extends Component {
	
  constructor(props) {
    super(props);
  
    this.state = {
      search: ''
    };
  }
	componentDidMount(){
    const { dispatch } = this.props;
    dispatch(getContacts());
	}

  render() {
  	const { auth, dispatch, contacts } = this.props; 
    return (
      <div className="layout-home">
     		<Header
      		login={() => dispatch(login({firstname: 'dominic lind'})) }
      		logout={() => dispatch(logout()) }
          add={() => this.props.history.push('/edit')}
          search={this.state.search}
          onSearch={search => this.setState({search})}
      		auth={auth.user}
          active={this.state.active}
          onBlurChange={active => this.setState({active})}
      	/>
        <TeamList
          isAdmin={auth.user}
          loading={contacts.loading}
          search={this.state.search}
          // onFavorite={(id) => dispatch(toggleFavorite(id))} 
          data={search(this.state.search, contacts.contacts)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
  auth: state.auth,
})

export default connect(mapStateToProps)(Home);