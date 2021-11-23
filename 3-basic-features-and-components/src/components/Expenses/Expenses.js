import ExpenseItem from './ExpenseItem';

const Expenses = ({ expenses }) => {
	return expenses.map(expense => (
		<ExpenseItem
			key={expense.id}
			id={expense.id}
			title={expense.title}
			amount={expense.amount}
			date={expense.date}
		/>
	));
};

export default Expenses;
