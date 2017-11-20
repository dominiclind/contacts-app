import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getContacts } from '../../actions/contacts';
import {login, logout} from '../../actions/auth';

import Header from '../../components/Header'
import TeamList from '../../components/TeamList';
import EmptyView from '../../components/EmptyView';

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

    const results = search(this.state.search, contacts.contacts);
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
        
        {results.length && !contacts.loading ? (
          <TeamList
            isAdmin={auth.user}
            loading={contacts.loading}
            search={this.state.search}
            data={results}
          />
        ): null}

        {results.length === 0 && !contacts.loading && !contacts.error? (
          <EmptyView 
            search={this.state.search}
            image="https://png.icons8.com/nothing-found/win10/128/000000"
            title={`No result for: ${this.state.search}`}
            text={'Try something else!'}
          />
        ): null}

        {results.length === 0 && !contacts.loading && contacts.error? (
          <EmptyView 
            search={this.state.search}
            image="https://png.icons8.com/ethernet-off/Dusk_Wired/128/000000"
            onTryAgain={() => this.props.dispatch(getContacts())}
            title={`Oops! Something went wrong`}
            text={'Couldn\'t fetch users. Did you loose internet connection?'}
          />
        ): null}

      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
  auth: state.auth,
})

export default connect(mapStateToProps)(Home);