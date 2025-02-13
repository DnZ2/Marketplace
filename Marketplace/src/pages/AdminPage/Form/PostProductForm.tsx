import Button from "../../../shared/UI/Button/Button"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import adminFormSchema from "./validationSchema"
import { Form } from "../../../shared/UI/Form"
import Input from "../../../shared/UI/Input/Input"
import Textarea from "../../../shared/UI/Textarea"
import { useGetCategoriesQuery } from "shared/redux/query/endpoints"
import { memo } from "react"

const PostProductForm = () => {
    const {data, isLoading} = useGetCategoriesQuery()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        criteriaMode: 'all',
        resolver: yupResolver(adminFormSchema),
    })
    const onSubmit = handleSubmit((data, {target}) => console.log(data, target.category.value))
    return (
        <Form className='flex flex-col gap-3 max-w-60' action="submit" onSubmit={onSubmit}>
            <Input className="bg-white" invalid={!!errors.title} {...register("title")} placeholder='Title' />
            <Input invalid={!!errors.price} {...register("price")} placeholder='Price' />
            <Input invalid={!!errors.maxQuantity} {...register("maxQuantity")} placeholder='Max Quantity'/>
            <Input invalid={!!errors.discount} {...register("discount")} placeholder='Discount'/>
            <Textarea {...register("description")} className="h-40" placeholder='Description...' maxLength={1000}/>
            <Button type='submit'>Add new product</Button>
        </Form>
    )
}


export default memo(PostProductForm)
