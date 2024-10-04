import PropTypes from "prop-types"
import Button from '../Button'

const ModalAcceptButton = ({children, ...props}) => {
  return (
	<Button className="mx-auto" {...props}>{children}</Button>
  )
}
ModalAcceptButton.propTypes={
	children: PropTypes.node,
}
export default ModalAcceptButton
