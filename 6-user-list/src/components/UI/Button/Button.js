import classes from './button.module.css';

const Button = props => {
	return (
		<div>
			<button
				className={classes.button}
				onClick={props.onClick}
				type={props.type}
			>
				{props.children}
			</button>
		</div>
	);
};

export default Button;
