import PropTypes from "prop-types"
import { forwardRef } from "react"

const SelectSearch = forwardRef(function SelectSearch ({className, ...props}, ref) {
  return (
	<input ref={ref} className={`p-2 rounded-md relative ${className}`} {...props} placeholder="Find your option"/>
  )
})
SelectSearch.propTypes={
	className: PropTypes.string,
}
export default SelectSearch
