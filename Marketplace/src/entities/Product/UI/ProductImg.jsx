import PropTypes from "prop-types"

const ProductImg = ({className, ...props}) => {
  return (
	<img className={`object-contain ${className}`} {...props}/>
  )
}
ProductImg.propTypes = {
	className: PropTypes.string,
}
export default ProductImg