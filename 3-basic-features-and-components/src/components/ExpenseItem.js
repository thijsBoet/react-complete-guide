import ExpenseDate from './ExpenseDate';
import Card from './Card';

import './ExpenseItem.css';

export default function ExpenseItem({ id, date, title, amount }) {
	return (
		<Card className='expense-item' key={id}>
			<ExpenseDate date={date} />
			<div className='expense-item__description'>
				<h2>{title}</h2>
				<div className='expense-item__price'>${amount}</div>
			</div>
		</Card>
	);
}
