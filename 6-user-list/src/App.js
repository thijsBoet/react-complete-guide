import React, { useState } from 'react';
import AddUser from './components/Users/AddUser/AddUser';
import UserList from './components/Users/UserList/UserList';

const App = () => {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (userName, userAge) =>
		setUsersList(prevUsersList => [
			...prevUsersList,
			{
				id: Math.random(),
				name: userName,
				age: userAge,
			},
		]);

	return (
		<>
			<AddUser onAddUser={addUserHandler} />
			<UserList users={usersList} />
		</>
	);
};

export default App;
