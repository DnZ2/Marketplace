import { useState } from "react"
import {Modal,ModalAcceptButton,ModalCancelButton,ModalContent,ModalControls,ModalTitle } from "../../shared/UI/Modal"
import Button from "../../shared/UI/Button/Button"
import StarRatingForm from "../../entities/Review/StarRatingForm"
import { usePostReviewMutation } from "../../shared/redux/query/endpoints/reviewsApi"
import PropTypes from "prop-types"
import { useAppSelector } from "../../shared/redux/store"

const AddReviewButton = ({children, productId}) => {
    const userId = useAppSelector(store=>store.user.id)
    const [postReview] = usePostReviewMutation()
    const [isModalOpen, setModalOpen] = useState(false)
    const handleCloseModal = (e) => {
        if(e.currentTarget===e.target){
            setModalOpen(false)
        }
    }
    const handleOpenModal = () => {
        setModalOpen(true)
    }
    const onSubmit = async (e, reviewText, ratingValue)=>{
        e.preventDefault()
        try{
            if(!userId) throw new Error("userID is not found")
            await postReview({userId, productId, reviewText, ratingValue}).unwrap()
            setModalOpen(false)
        }
        catch(e){
            console.log(e.message)
        }
    }
    return (
        <>
            <Button className="mx-auto" onClick={handleOpenModal}>{children}</Button>
            <Modal isOpen={isModalOpen} onMouseDown={handleCloseModal}>
                <ModalTitle>Rate the product</ModalTitle>
                <ModalContent>
                    <StarRatingForm onSubmit={onSubmit}/>
                </ModalContent>
                <ModalControls align={"self-end"}>
                    <ModalAcceptButton form="review-form">Accept</ModalAcceptButton>
                    <ModalCancelButton onClick={()=>setModalOpen(false)}>Cancel</ModalCancelButton>
                </ModalControls>
            </Modal>
        </>
    )
}
AddReviewButton.propTypes ={
    children: PropTypes.node,
    productId: PropTypes.string,
}
export default AddReviewButton
