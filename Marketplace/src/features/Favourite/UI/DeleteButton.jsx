import Remove from "../../../assets/remove.svg?react"
import PropTypes from 'prop-types';
import Button from "../../../shared/UI/Button";

const DeleteButton = ({variant="svg", onClick}) => {
	DeleteButton.propTypes={
		variant: PropTypes.string,
		onClick: PropTypes.func
	}
  return (
	<Button onClick={onClick} variant={variant} size="none" className={`${variant==="svg" ? "bg-inherit size-[50px] rounded-md" : "bg-white size-8 rounded-full"} flex items-center justify-center hover:bg-[#db4444] [&>svg]:hover:stroke-white [&>svg]:hover:fill-[#db4444]`}>
		<Remove className={`${variant==="svg" ? "scale-150" : ""}`}/>
	</Button>
  )
}

export default DeleteButton
