import Button from "../Button"
import PropTypes from "prop-types"

const ModalCancelButton = ({children, ...props}) => {
	return (
		<Button className="mx-auto" variant="secondary" size="secondary" {...props}>{children}</Button>
	)
  }
  ModalCancelButton.propTypes={
	children: PropTypes.node,
}
export default ModalCancelButton
