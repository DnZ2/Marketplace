import PropTypes from "prop-types"
import Button from "../../../shared/UI/Button/Button"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import adminFormSchema from "./validationSchema"
import { Form } from "../../../shared/UI/Form"
import Input from "../../../shared/UI/Input/Input"
import AdminFormNumberInput from "./UI/AdminFormNumberInput"
import Textarea from "../../../shared/UI/Textarea"

const AdminPageForm = ({categories}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        criteriaMode: 'all',
        resolver: yupResolver(adminFormSchema),
    })
    const onSubmit = (data, {target}) => console.log(data, target.category.value)
    return (
        <Form className='sticky top-20 flex flex-col gap-3 max-w-60' action="submit" onSubmit={handleSubmit(onSubmit)}>
            <Input className="bg-white" invalid={!!errors.title} {...register("title")} placeholder='Title' />
            <AdminFormNumberInput errorMessage={errors.price} {...register("price")} placeholder='Price' />
            <AdminFormNumberInput errorMessage={errors.maxQuantity} {...register("maxQuantity")} placeholder='Max Quantity'/>
            <AdminFormNumberInput errorMessage={errors.discount} {...register("discount")} placeholder='Discount' maxValue={90}/>
            <Textarea {...register("description")} className="h-40" placeholder='Description...' maxLength={1000}/>
            <Button type='submit'>Add new product</Button>
        </Form>
    )
}

AdminPageForm.propTypes = {
    categories: PropTypes.array,
}

export default AdminPageForm
