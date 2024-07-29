import PropTypes from 'prop-types';

const Button = ({children, className, type="submit", disabled, ...other}) => {
	Button.propTypes={
		children: PropTypes.node,
		className: PropTypes.string,
		disabled: PropTypes.bool,
		type: PropTypes.string,
	}

  return (
	<button disabled={disabled} type={type} className={`${className} py-4 px-10 rounded-md text-[#F5F5F5] bg-[#DB4444]`} {...other}>
		{children}
	</button>
  )
}

export default Button
