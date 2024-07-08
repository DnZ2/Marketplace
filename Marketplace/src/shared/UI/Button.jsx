import PropTypes from 'prop-types';

const Button = ({children, border="",type="click", borderColor="", center="mx-auto", disabled, onClick }) => {
	Button.propTypes={
		children: PropTypes.node,
		border: PropTypes.string,
		borderColor: PropTypes.string,
		center: PropTypes.string,
		disabled: PropTypes.bool,
		onClick: PropTypes.func,
		type: PropTypes.string,
	}

  return (
	<button onClick={onClick} disabled={disabled} type={type} className={`${center} py-4 px-12 rounded-md text-[#F5F5F5] bg-[#DB4444] ${border} ${borderColor}`}>
		{children}
	</button>
  )
}

export default Button
