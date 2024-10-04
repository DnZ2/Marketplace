import PropTypes from "prop-types"

const SelectOption = ({children, className, ...props}) => {
  return (
	<button className={`flex items-center justify-between w-full ${className}`} {...props}>
		{children}
	</button>
  )
}
SelectOption.propTypes={
	children: PropTypes.node,
	className: PropTypes.string,
}
export default SelectOption
