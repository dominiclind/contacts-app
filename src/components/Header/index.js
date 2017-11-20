import React from 'react'
import './_header.scss';

import Input from '../Input';
import Button from '../Button';

export default (props) => (
  <nav className={`header ${props.active ? 'search-focus' : ''}`}>
      
    {props.auth ? (
      <div className="pos-abs top-left">
        <Button onClick={props.add}>Add member</Button>
      </div>
    ) : null}

    <Input
      placeholder="Search here!"
      icon="md-search"
      value={props.search}
      onBlurChange={(active) => props.onBlurChange(active)}
      onChange={search => props.onSearch(search)}
    />

    {props.auth ? (
      <div className="pos-abs top-right">
        <Button inverted onClick={props.logout}>Logout</Button>
      </div>
    ) : (
      <div className="pos-abs top-right">
        <Button inverted onClick={props.login}>Login</Button>
      </div>
    )}

  </nav>
)