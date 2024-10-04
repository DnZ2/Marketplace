import PropTypes from "prop-types"

const ModalContent = ({children, className}) => {
  return (
	<div className={"flex-grow "+className}>
		{children}
	</div>
  )
}
ModalContent.propTypes={
	children: PropTypes.node,
	className: PropTypes.string,
}
export default ModalContent
