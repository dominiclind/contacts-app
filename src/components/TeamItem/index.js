import React from 'react'
import Ionicon from 'react-ionicons'
import { Link } from 'react-router-dom'

import { getInitials } from '../../utils/contacts';
import './_team-item.scss';

import TeamAvatar from '../TeamAvatar';

export default ({
	id,
	isAdmin,
	first_name = '',
	last_name = '',
	image = '',
	title = '',
	team = false,
	location = false,
	color = false,
	isFavorite,
	onFavorite
}) => (
	<li className="team-item">
		<TeamAvatar
			image={image || false}
			initials={getInitials(first_name, last_name)}
			color={color}
		/>
		<div className="content">
			<p className="name">{first_name} {last_name} <span className="title">{title}</span></p>
			<div className="meta">
				{team && team !== 'Teamless' ? (
					<p className="tag-team">
					<Ionicon 
						color="white"
						icon="md-person"
						className="tag-icon"
					/>
						{team}
					</p>
				) : null}
				{location ? (
					<p className="location">
					<Ionicon 
						color="black"
						icon="md-pin"
						className="tag-icon"
					/>
						{location}
					</p>
				) : null}
			</div>
		</div>

		<div className="left">
		{/*
			<FavoriteToggle onClick={() => onFavorite(id)} favorite={isFavorite}/>
			<Link className="edit" to={`/edit/${id}`}>View</Link>
		*/}
			{isAdmin ? (
				<Link className="edit" to={`/edit/${id}`}>Edit</Link>
			): null}
		</div>
	</li>
);