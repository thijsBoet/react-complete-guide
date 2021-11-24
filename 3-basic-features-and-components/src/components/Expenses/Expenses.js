import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = ({ expenses }) => {
	const [filteredYear, setFilteredYear] = useState(2021);
	const filterChangeHandler = selectedYear => setFilteredYear(selectedYear);

	return (
		<Card className='expenses'>
			<ExpensesFilter
				onChangeFilterYear={filterChangeHandler}
				selected={filteredYear}
			/>
			{expenses.map(expense => (
				<ExpenseItem
					key={expense.id}
					id={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</Card>
	);
};

export default Expenses;
