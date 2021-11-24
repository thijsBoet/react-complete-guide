import React from 'react';
import ExpenseItem from './ExpenseItem';

import './ExpensesList.css';

const Expenseslist = ({ items, year }) => {
	if (items.length === 0)
		return (
			<h2 className='expenses-list__fallback'>No expenses found in {year}.</h2>
		);

	return (
		<ul className='expenses-list'>
			{items.map(({ id, date, title, amount }) => (
				<ExpenseItem key={id} date={date} title={title} amount={amount} />
			))}
		</ul>
	);
};

export default Expenseslist;
