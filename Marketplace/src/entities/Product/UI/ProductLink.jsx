import { NavLink } from 'react-router-dom'
import PropTypes from "prop-types"

const ProductLink = ({children, className, id}) => {
  return (
	<NavLink to={`/products/${id}`} className={`text-base ${className}`}>
		{children}
	</NavLink>
  )
}
ProductLink.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	id: PropTypes.string,
}
export default ProductLink
