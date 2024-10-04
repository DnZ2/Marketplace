import PropTypes from "prop-types"

const Label = ({children, ...props}) => {
  return (
	<label {...props}>
		{children}
	</label>
  )
}
Label.propTypes={
	children: PropTypes.node,
}
export default Label
