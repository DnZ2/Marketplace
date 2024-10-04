import PropTypes from 'prop-types';

const ProductBadge = ({isDiscount, isNew, children}) => {
	if(!isDiscount && !isNew) return null
  return (
	<div className={`bg-[#DB4444] ${isNew && "bg-[#18864B]"} rounded-md text-xs px-3 py-1 flex justify-center items-center text-[#F5F5F5]`}>
		{children}
	</div>
  )
}
ProductBadge.propTypes={
	children: PropTypes.node,
	isDiscount: PropTypes.bool,
	isNew: PropTypes.bool,
}
export default ProductBadge
