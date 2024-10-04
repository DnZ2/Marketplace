import PropTypes from "prop-types"

const SelectTrigger = ({children, className, ...props}) => {
  return (
	<div className={`relative flex w-full ${className}`} {...props}>
		{children}
	</div>
  )
}
SelectTrigger.propTypes={
	children: PropTypes.node,
	className: PropTypes.string,
}
export default SelectTrigger