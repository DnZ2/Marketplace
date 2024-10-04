import PropTypes from "prop-types"

const SelectOptions = ({children, className}) => {
  return (
	<div className={`absolute top-full left-0 w-full z-[1] ${className}`}>
		{children}
	</div>
  )
}
SelectOptions.propTypes={
	children: PropTypes.node,
	className: PropTypes.string,
}
export default SelectOptions
