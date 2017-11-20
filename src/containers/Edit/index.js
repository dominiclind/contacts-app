import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getSingleContact, saveContact, deleteContact } from '../../actions/contacts';
import { getInitials } from '../../utils/contacts';

import Input from '../../components/Input';
import ColorInput from '../../components/ColorInput';
import Button from '../../components/Button';
import TeamAvatar from '../../components/TeamAvatar';

import './_edit.scss';

class Edit extends Component {
	
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      color: '',
      location: '',
      team: '',
      title: '',
      image: ''
    }

  }

  componentWillMount(){
    const { history, auth} = this.props;

    // real simple auth protected route
    if(!auth.user){
      history.push('/')
    }
  }
	componentDidMount(){
    const { dispatch, match } = this.props;
    const { params } = match;

    if(params.id){
      dispatch(getSingleContact(params.id)).then(contact => {
        this.setState({...contact});
      })
    }
  }

  _positiveAction(){
    const { dispatch, match } = this.props;
    const { params } = match;

    dispatch(saveContact(params.id || false,{...this.state})).then(contact => {
      this.props.history.push(`/`)
    })

  }
  _delete(){
    const { dispatch, match } = this.props;
    const { params } = match;

    dispatch(deleteContact(params.id)).then(() => {
      this.props.history.push(`/`)
    })
  }

  render() {
  	const { match } = this.props;
  	const { params } = match;

  	const edit = params.id ? true : false;

    const actionLabel = edit ? 'Save' : 'Create';
    const button = edit ? <Button type="negative" inverted onClick={() => this._delete()}>Delete</Button> : null;

  	return (
      <div className="edit">

        <div className="form">
          <TeamAvatar
            image={this.state.image || false}
            initials={getInitials(this.state.first_name, this.state.last_name)}
          />

        	<div className="flex-grid halfs">
        		<div className="col">
        			<Input 
                placeholder="Firstname"
                value={this.state.first_name}
                onChange={first_name => this.setState({first_name})}
              />
            </div>
            <div className="col">
              <Input 
                placeholder="Lastname"
                value={this.state.last_name}
                onChange={last_name => this.setState({last_name})}
              />
            </div>
            <div className="col">
              <Input
                placeholder="Title"
                value={this.state.title}
                onChange={title =>  this.setState({title})}
              />
            </div>
            <div className="col">
              <Input 
                placeholder="Team"
                value={this.state.team}
                onChange={team =>  this.setState({team})}
              />
            </div>
            <div className="col">
              <ColorInput 
                placeholder="Color"
                value={this.state.color}
                onChange={color => this.setState({color})}
              />
            </div>
            <div className="col">
              <Input 
                placeholder="Location"
                value={this.state.location}
                onChange={location => this.setState({location})}
              />
            </div>
        	</div>

          <div className="buttons">
            <Button type="positive" onClick={() => this._positiveAction()}>{actionLabel}</Button>
            {button}
            <Button
              inverted 
              small
              icon="ios-arrow-round-back"
              onClick={() => this.props.history.push('/')}
            >
              Back
            </Button>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
  auth: state.auth
})

export default connect(mapStateToProps)(Edit);