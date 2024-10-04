import Edit from "../../../assets/edit-svgrepo-com.svg?react"
import PropTypes from 'prop-types';

const EditButton = ({onClick}) => {
	EditButton.propTypes={
		onClick: PropTypes.func
	}
  return (
	<button onClick={onClick} className='h-[50px] w-[50px] cursor-pointer flex justify-center items-center rounded hover:bg-[#db4444] [&>svg]:hover:fill-white [&>svg]:hover:stroke-white'>
		<Edit className="scale-150"/>
	</button>
  )
}

export default EditButton