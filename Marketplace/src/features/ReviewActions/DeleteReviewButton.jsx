import {useState} from 'react'
import {Modal,ModalAcceptButton,ModalCancelButton,ModalControls,ModalTitle } from "../../shared/UI/Modal"
import Button from "../../shared/UI/Button"
import PropTypes from "prop-types"
import { useDeleteReviewMutation } from '../../shared/redux/query/reviewsApi'
const DeleteReviewButton = ({children, reviewId}) => {
	const [isModalOpen, setModalOpen] = useState(false)
	const [removeReview] = useDeleteReviewMutation()
	const handleCloseModal = (e) => {
		if(e.currentTarget===e.target){
			setModalOpen(false)
		}
	}
	const handleOpenModal = () => {
		setModalOpen(true)
	}
	const handleRemoveReview = async()=>{
		try{
			await removeReview(reviewId).unwrap()
			setModalOpen(false)
		}
		catch(e){
			console.log(e)
		}
	}
	return (
	<>
		<Button className="mx-auto" onClick={handleOpenModal}>{children}</Button>
		<Modal isOpen={isModalOpen} onMouseDown={handleCloseModal}>
			<ModalTitle>Are you sure about that?</ModalTitle>
			<ModalControls align={"self-end"}>
				<ModalAcceptButton onClick={handleRemoveReview}>Delete</ModalAcceptButton>
				<ModalCancelButton onClick={()=>setModalOpen(false)}>Cancel</ModalCancelButton>
			</ModalControls>
		</Modal>
	</>
  )
}
DeleteReviewButton.propTypes ={
	children: PropTypes.node,
	reviewId: PropTypes.string,
}
export default DeleteReviewButton
