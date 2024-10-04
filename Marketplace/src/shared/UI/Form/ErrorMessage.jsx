import PropTypes from "prop-types"

const ErrorMessage = ({children}) => {
  return (
	<span className="text-red-400">{children}</span>
  )
}
ErrorMessage.propTypes={
	children: PropTypes.node,
}
export default ErrorMessage
