import PropTypes from "prop-types"

const TopRightSide = ({children, className}) => {
  return (
	<div className={`absolute right-3 top-3 flex flex-col gap-2 ${className}`}>
		{children}
	</div>
  )
}
TopRightSide.propTypes={
	children: PropTypes.node,
	className: PropTypes.string,
}
export default TopRightSide