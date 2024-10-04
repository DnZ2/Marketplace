import PropTypes from "prop-types"

const Form = ({children, ...other}) => {
  return (
	<form {...other}>
		{children}
	</form>
  )
}
Form.propTypes={
	children: PropTypes.node,
}
export default Form
