import React from 'react';

import './_list-divider.scss';

export default (props) => (
	<div className="list-divider">
		<div className="wrapper max-width">
		  <p className="label">{props.label}</p>
		  <p className="amount">{props.amount}</p>
		</div>
	</div>
);
