import PropTypes from "prop-types"

const ProductFooter = ({className, children}) => {
  return (
	<div className={`flex flex-col gap-2 ${className}`}>
		{children}
	</div>
  )
}
ProductFooter.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
}
export default ProductFooter
