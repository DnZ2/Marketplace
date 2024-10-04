import PropTypes from "prop-types"

const ModalTitle = ({children}) => {
  return (
	<h1 className="text-4xl">{children}</h1>
  )
}
ModalTitle.propTypes={
	children: PropTypes.node,
}
export default ModalTitle
