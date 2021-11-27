import React from 'react';
import classes from './userList.module.css';
import Card from '../../UI/Card/Card';

const Userlist = props => {
	return (
		<Card className={classes.users}>
			<ul>
				{props.users.map(user => (
					<li key={user.id}>
						{user.name} - {user.age} years old.
					</li>
				))}
			</ul>
		</Card>
	);
};

export default Userlist;
