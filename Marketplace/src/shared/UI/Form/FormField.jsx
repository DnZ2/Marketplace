import PropTypes from "prop-types"

const FormField = ({children, className, ...props}) => {
  return (
	<div className={`flex flex-col gap-2 ${className}`} {...props}>
		{children}
	</div>
  )
}
FormField.propTypes={
	children: PropTypes.node,
	className: PropTypes.string,
}
export default FormField
