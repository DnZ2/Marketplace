import { useState } from "react"
import {Modal,ModalAcceptButton,ModalCancelButton,ModalContent,ModalControls,ModalTitle } from "../../shared/UI/Modal"
import Button from "../../shared/UI/Button/Button"
import StarRatingForm from "../../entities/Review/StarRatingForm"
import { usePatchReviewMutation } from "../../shared/redux/query/endpoints/reviewsApi"
import { useAppSelector } from "../../shared/redux/store"
import PropTypes from "prop-types"

const UpdateReviewButton = ({children, reviewId}) => {
    const userId = useAppSelector(store=>store.user.id)
    const [patchReview] = usePatchReviewMutation()
    const [isModalOpen, setModalOpen] = useState(false)
    const handleCloseModal = (e) => {
        if(e.currentTarget===e.target){
            setModalOpen(false)
        }
    }
    const handleOpenModal = () => {
        setModalOpen(true)
    }
    const onSubmit = async(e, reviewText, ratingValue)=>{
        e.preventDefault()
        try{
            if(!userId) throw new Error("userID is not found")
            e.preventDefault()
            await patchReview({userId, reviewId, reviewText, ratingValue}).unwrap()
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
                <ModalTitle>Change your review</ModalTitle>
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
UpdateReviewButton.propTypes ={
    children: PropTypes.node,
    reviewId: PropTypes.string,
}
export default UpdateReviewButton
