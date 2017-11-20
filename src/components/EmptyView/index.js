import React from 'react';

import './_empty-view.scss';

import Button from '../Button';

export default (props) => (
	<div className="empty-view">
		<div className="center">
			<img src={props.image} />
			<h2>{props.title}</h2>
			<p>{props.text}</p>

			{props.onTryAgain ? (
				<Button onClick={props.onTryAgain}>Try again</Button>
			) : null}

		</div>
	</div>
);
