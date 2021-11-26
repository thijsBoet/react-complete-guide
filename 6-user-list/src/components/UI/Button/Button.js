import './button.css';

const Button = props => {
	return (
		<div>
			<button className='button' onClick={props.onClick} type={props.type}>
				{props.children}
			</button>
		</div>
	);
};

export default Button;
