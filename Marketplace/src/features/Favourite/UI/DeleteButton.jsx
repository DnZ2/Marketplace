import Remove from "../../../assets/remove.svg?react"
import PropTypes from 'prop-types';

const DeleteButton = ({type, onClick}) => {
	DeleteButton.propTypes={
		type: PropTypes.string,
		onClick: PropTypes.func
	}
  return (
	<button onClick={onClick} className={`${type==="secondary" ? "bg-inherit" : "bg-white"} ${type==="secondary" ? "size-[50px]" : "size-8"} cursor-pointer flex items-center justify-center ${type==="secondary" ? "rounded" : "rounded-full"} hover:bg-[#db4444] [&>svg]:hover:stroke-white [&>svg]:hover:fill-[#db4444]`}>
		<Remove className={`${type==="secondary" ? "scale-150" : ""}`}/>
	</button>
  )
}

export default DeleteButton
