import PropTypes from "prop-types"

const TopLeftSide = ({children, className}) => {
  return (
	<div className={`absolute left-3 top-3 flex flex-col gap-1 ${className}`}>
		{children}
	</div>
  )
}
TopLeftSide.propTypes={
	children: PropTypes.node,
	className: PropTypes.string,
}
export default TopLeftSide
