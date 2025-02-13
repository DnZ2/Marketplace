import {Modal,ModalAcceptButton,ModalCancelButton,ModalContent,ModalControls,ModalTitle } from "shared/UI/Modal"
import Button from "shared/UI/Button/Button"
import useToggle from "shared/hooks/useToggle"
import { Props as ButtonProps } from "shared/UI/Button/Button"
import useEvent from "react-use-event-hook"
import { usePatchReviewMutation, UserReview } from "shared/redux/query/endpoints"
import {Form} from "shared/UI/Form"
import { useForm } from "react-hook-form"
import RatingInput, { FormValues } from "entities/Review/RatingInput"
import { toast } from "react-toastify"
import Textarea from "shared/UI/Textarea"

interface Props extends ButtonProps{
    review: UserReview
}

const UpdateReviewButton = (props: Props) => {
    const {children, review, ...otherProps} = props

    const [patchReview] = usePatchReviewMutation()

    const {isActive: isModalOpen, on, off} = useToggle(false)
    const { handleSubmit, control, register } = useForm<FormValues>({
        defaultValues: {
            rating: review.rating,
            reviewText: review.reviewText,
        },
    });

    const onSubmit = handleSubmit(async(data) => {
        try{
            await patchReview({id: review.id, ...data})
            off()
            toast.success("Your review is patched")
        } catch(e){
            toast.error("Failed patch review")
            console.log(e)
        }
    })
   
    const handleCloseModal = useEvent((e) => {
        if(e.currentTarget===e.target){
            off()
        }
    })
    return (
        <>
            <Button className="mx-auto" onClick={on} {...otherProps}>{children}</Button>
            <Modal isOpen={isModalOpen} onMouseDown={handleCloseModal}>
                <ModalTitle>Change your review</ModalTitle>
                <ModalContent>
                    <Form id="patch-review-form" onSubmit={onSubmit}>
                        <RatingInput control={control}/>
                        <Textarea {...register("reviewText")}/>
                    </Form>
                </ModalContent>
                <ModalControls align={"self-end"}>
                    <ModalAcceptButton form="patch-review-form">Accept</ModalAcceptButton>
                    <ModalCancelButton onClick={off}>Cancel</ModalCancelButton>
                </ModalControls>
            </Modal>
        </>
    )
}

export default UpdateReviewButton
