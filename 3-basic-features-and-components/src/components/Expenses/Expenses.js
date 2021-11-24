import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';

import './Expenses.css';

const Expenses = ({ items }) => {
	const [filteredYear, setFilteredYear] = useState(2021);
	const filterChangeHandler = selectedYear => setFilteredYear(selectedYear);
	items = items.filter(item => item.date.getFullYear() === filteredYear);

	return (
		<Card className='expenses'>
			<ExpensesFilter
				onChangeFilterYear={filterChangeHandler}
				selected={filteredYear}
			/>
			<ExpensesList items={items} year={filteredYear} />
		</Card>
	);
};

export default Expenses;
