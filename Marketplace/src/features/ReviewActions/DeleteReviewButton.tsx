import {Modal,ModalAcceptButton,ModalCancelButton,ModalControls,ModalTitle } from "shared/UI/Modal"
import Button from "shared/UI/Button/Button"
import { useDeleteReviewMutation } from 'shared/redux/query/endpoints/reviewsApi'
import useToggle from 'shared/hooks/useToggle'
import useEvent from "react-use-event-hook"
import { Props as ButtonProps } from "shared/UI/Button/Button"
import { toast } from "react-toastify"
interface Props extends ButtonProps{
    reviewId: string
}

const DeleteReviewButton = (props: Props) => {
    const {children, reviewId} = props
    const {isActive: isModalOpen, off, on} = useToggle(false)
    const [removeReview] = useDeleteReviewMutation()
    const handleCloseModal = useEvent((e) => {
        if(e.currentTarget===e.target){
            off()
        }
    })
    const handleRemoveReview = async()=>{
        try{
            await removeReview(reviewId).unwrap()
            off()
            toast.error("Your review is deleted")
        }
        catch(e){
            toast.error("Failed post review")
            console.log(e)
        }
    }
    return (
        <>
            <Button className="mx-auto" onClick={on}>{children}</Button>
            <Modal isOpen={isModalOpen} onMouseDown={handleCloseModal}>
                <ModalTitle>Are you sure about that?</ModalTitle>
                <ModalControls align={"self-end"}>
                    <ModalAcceptButton onClick={handleRemoveReview}>Delete</ModalAcceptButton>
                    <ModalCancelButton onClick={off}>Cancel</ModalCancelButton>
                </ModalControls>
            </Modal>
        </>
    )
}

export default DeleteReviewButton
