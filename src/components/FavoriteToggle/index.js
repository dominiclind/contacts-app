import React from 'react';
import Ionicon from 'react-ionicons';

import './_favorite-toggle.scss';

export default (props) => (
	<div
		className={`favorite-toggle ${props.favorite ? 'is-favorite' : ''}`}
		onClick={props.onClick}
	>
	  <Ionicon icon="md-star" className="icon filled" />
	</div>
);
