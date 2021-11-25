import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData }) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');
	const [toggleAddExpense, setToggleAddExpense] = useState(false);

	const titleChangeHandler = ({ target }) => setEnteredTitle(target.value);

	const amountChangeHandler = ({ target }) => setEnteredAmount(target.value);

	const dateChangeHandler = ({ target }) => setEnteredDate(target.value);

	const onSubmitHandler = e => {
		e.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		onSaveExpenseData(expenseData);

		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};

	return toggleAddExpense ? (
		<form onSubmit={onSubmitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label htmlFor='title'>Title</label>
					<input
						onChange={titleChangeHandler}
						value={enteredTitle}
						type='text'
						name='title'
						id='title'
					/>
				</div>
				<div className='new-expense__control'>
					<label htmlFor='amount'>Amount</label>
					<input
						onChange={amountChangeHandler}
						value={enteredAmount}
						type='number'
						min='0.01'
						step='0.01'
						name='amount'
						id='amount'
					/>
				</div>
				<div className='new-expense__control'>
					<label htmlFor='date'>Date</label>
					<input
						onChange={dateChangeHandler}
						value={enteredDate}
						type='date'
						name='date'
						id='date'
					/>
				</div>
			</div>
			<button
				onClick={() => setToggleAddExpense(false)}
				className='new-expense__btn'
			>
				Cancel
			</button>
			<button className='new-expense__actions' type='submit'>
				Add Expense
			</button>
		</form>
	) : (
		<button
			onClick={() => setToggleAddExpense(true)}
			className='new-expense__actions'
			type='submit'
		>
			Add new Expense
		</button>
	);
};

export default ExpenseForm;
