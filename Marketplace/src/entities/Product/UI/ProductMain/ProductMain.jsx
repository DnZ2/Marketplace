import PropTypes from "prop-types"

const ProductMain = ({className, children}) => {
  return (
	<div className={`flex justify-center items-center rounded-lg overflow-hidden bg-[#f0f0f0] relative aspect-square ${className}`}>
		{children}
	</div>
  )
}
ProductMain.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
}
export default ProductMain
