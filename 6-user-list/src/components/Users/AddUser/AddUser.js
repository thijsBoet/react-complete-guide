import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import classes from './AddUser.module.css';

const AddUser = props => {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');

	const addUserHandler = e => {
		e.preventDefault();

		if (enteredUsername.trim() === 0 && enteredAge.trim() === 0) return;
		if (+enteredAge.trim() < 1) return;

		props.onAddUser(enteredUsername, +enteredAge);

		setEnteredAge('');
		setEnteredUsername('');
	};

	const usernameChangeHandler = e => setEnteredUsername(e.target.value);
	const ageChangeHandler = e => setEnteredAge(e.target.value);

	return (
		<Card className={classes.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor='username'>Username</label>
				<input
					value={enteredUsername}
					onChange={usernameChangeHandler}
					id='username'
					type='text'
					placeholder='Enter your name'
				/>
				<label htmlFor='age'>Age (years)</label>
				<input
					value={enteredAge}
					onChange={ageChangeHandler}
					id='age'
					min='1'
					step='1'
					max='130'
					type='number'
					placeholder='35'
				/>
				<Button type='submit'>Submit</Button>
			</form>
		</Card>
	);
};

export default AddUser;
