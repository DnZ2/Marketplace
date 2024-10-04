import PropTypes from "prop-types"
import { createPortal } from "react-dom"
const Modal = ({children, isOpen, onMouseDown}) => {
	if(!isOpen) return null
	return (createPortal(
	<div className="fixed z-50 top-0 flex items-center justify-center h-full w-full bg-black bg-opacity-50" onMouseDown={onMouseDown}>
		<div className="flex flex-col gap-3 py-8 px-12 bg-[#f5f5f5]">
			{children}
		</div>
	</div>,
	document.body
	)

  )
}
Modal.propTypes={
	children: PropTypes.node,
	isOpen: PropTypes.bool,
	onMouseDown: PropTypes.func,
}
export default Modal
