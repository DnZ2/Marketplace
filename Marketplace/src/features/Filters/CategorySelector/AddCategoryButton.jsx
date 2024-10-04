import { forwardRef, useEffect, useState } from "react"
import PropTypes from 'prop-types';

const AddCategoryButton = forwardRef(function AddCategoryButton({submit}, ref) {
	const [isOpen, setOpen] = useState(false)
	const handleToggleAddCategory = () =>{
		setOpen(!isOpen)
	}
	const handleCloseAddCategory = () =>{
		setOpen(false)
	}
	useEffect(()=>{
		isOpen && window.addEventListener("mousedown", handleCloseAddCategory)
		return () => window.removeEventListener("mousedown", handleCloseAddCategory)
	}, [isOpen])
	return (
	<>
		<button onClick={handleToggleAddCategory}>Add category</button>
		{isOpen &&
		<div>
			<input ref={ref} type="text"/>
			<button onClick={submit}>+</button>
		</div>}
	</>
  )
})
AddCategoryButton.propTypes={
	submit: PropTypes.func,
}
export default AddCategoryButton
