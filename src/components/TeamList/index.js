import React from 'react'
import './_team-list.scss';

import TeamItem from '../TeamItem';
import ListDivider from '../ListDivider';

export default (props) => (
	<ul className="team-list max-width">
		<ListDivider
			label={props.search ? `Results for: ${props.search}`: `All contacts`}
			amount={props.data.length}
		/>
	  {props.data.map(member => (
	  	<TeamItem
	  		isAdmin={props.isAdmin}
	  		key={member.id}
	  		onFavorite={props.onFavorite}
	  		isFavorite={true}
	  		{...member}
	  	/>
	  	)
	  )}
	</ul>
);