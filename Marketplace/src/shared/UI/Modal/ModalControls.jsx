import PropTypes from "prop-types"

const ModalControls = ({children, align}) => {
  return (
	<div className={`${align} flex gap-3`}>
		{children}
	</div>
  )
}
ModalControls.propTypes={
	children: PropTypes.node,
	align: PropTypes.string,
}
export default ModalControls
