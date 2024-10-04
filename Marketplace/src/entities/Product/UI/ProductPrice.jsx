import PropTypes from 'prop-types'

const ProductPrice = ({price, currentPrice, className}) => {
  return (
	<div className={`flex gap-3 ${className}`}>
		{currentPrice === price ?
			<span>${price}</span>
			:
			<>
			<span className='text-[#DB4444]'>${currentPrice}</span>
			<span className="text-gray-400 line-through">${price}</span>
			</>
		}
	</div>
  )
}

ProductPrice.propTypes = {
	price: PropTypes.number,
	currentPrice: PropTypes.number,
	className: PropTypes.string,
}

export default ProductPrice
