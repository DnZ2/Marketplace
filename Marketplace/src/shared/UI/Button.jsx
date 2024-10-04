import PropTypes from 'prop-types';
import ButtonVariants from './Button.styles';
const Button = ({children, className, type="submit", disabled, size, variant, ...other}) => {
	Button.propTypes={
		children: PropTypes.node,
		className: PropTypes.string,
		disabled: PropTypes.bool,
		type: PropTypes.string,
		variant: PropTypes.string,
		size: PropTypes.string,
	}

  return (
	<button disabled={disabled} type={type} className={ButtonVariants({variant, size, className})} {...other}>
		{children}
	</button>
  )
}

export default Button
