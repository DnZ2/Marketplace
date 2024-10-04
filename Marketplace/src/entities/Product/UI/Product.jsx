import PropTypes from "prop-types"

const Product = ({className, children}) => {
  return (
	<div className={`flex flex-col gap-4 ${className}`}>
		{children}
	</div>
  )
}
Product.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
}
export default Product
