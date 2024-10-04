import PropTypes from "prop-types"
import { forwardRef } from "react"

const Select = forwardRef(function Select({children, className, ...props}, ref) {
  return (
	<div ref={ref} className={`relative ${className}`} {...props}>
		{children}
	</div>
  )
})
Select.propTypes={
	children: PropTypes.node,
	className: PropTypes.string,
}
export default Select
