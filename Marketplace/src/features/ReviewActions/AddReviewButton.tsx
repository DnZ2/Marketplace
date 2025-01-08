import {Modal,ModalAcceptButton,ModalCancelButton,ModalContent,ModalControls,ModalTitle } from "shared/UI/Modal"
import Button from "shared/UI/Button/Button"
import { Props as ButtonProps } from "shared/UI/Button/Button"
import useToggle from "shared/hooks/useToggle"
import Form from "shared/UI/Form/Form"
import RatingInput from "entities/Review/RatingInput"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import { FormValues } from "entities/Review/RatingInput"
import Textarea from "shared/UI/Textarea"
import useEvent from "react-use-event-hook"
import { usePostReviewMutation } from "shared/redux/query/endpoints"

interface Props extends ButtonProps{
    productId: string
}

const AddReviewButton = (props: Props) => {
    const {children, productId, ...otherProps} = props

    const {isActive: isModalOpen, on, off} = useToggle(false)
   
    const [postReview] = usePostReviewMutation()

    const { handleSubmit, control, register } = useForm<FormValues>({
        defaultValues: {
            rating: 0,
            reviewText: "",
        },
    });

    const onSubmit = handleSubmit(async(data) => {
        try{
            await postReview({productId, ...data})
            off()
        } catch(e){
            toast.error("Failed post review")
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
                <ModalTitle>Rate the product</ModalTitle>
                <ModalContent>
                    <Form id="post-review-form" onSubmit={onSubmit}>
                        <RatingInput control={control}/>
                        <Textarea {...register("reviewText")}/>
                    </Form>
                </ModalContent>
                <ModalControls align={"self-end"}>
                    <ModalAcceptButton form="post-review-form">Accept</ModalAcceptButton>
                    <ModalCancelButton onClick={off}>Cancel</ModalCancelButton>
                </ModalControls>
            </Modal>
        </>
    )
}

export default AddReviewButton
