import Checked from "assets/checked-svgrepo-com.svg?react"
import { ComponentPropsWithoutRef, memo } from 'react';
import { Diapason } from 'shared/redux/query/endpoints/productsApi';
import { Form } from 'shared/UI/Form';
import { useForm } from "react-hook-form";
import Input from "shared/UI/Input/Input";
import Button from "shared/UI/Button/Button";
import validationSchema from "../priceSelectorValidation";
import { yupResolver } from "@hookform/resolvers/yup";


interface Props extends ComponentPropsWithoutRef<"form">{
    onFilterByPrice: (min:number,max:number)=>void
	diapason: Diapason
	id?: string
}

const PriceSelector = (props: Props) => {
    const {onFilterByPrice, className, diapason, id} = props

    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(validationSchema(diapason.from, diapason.to)),
        defaultValues: {
            min: diapason.from,
            max: diapason.to,
        },
    })

    const onSubmit = handleSubmit((data)=>{
        if (errors.min) {
            setValue("min", diapason.from);
        }
        if (errors.max) {
            setValue("max", diapason.to);
        }
        onFilterByPrice(data?.min, data?.max);
    })

    return (
        <Form className={`flex items-center gap-4 ${className}`} onSubmit={onSubmit}>
            <Input {...register("min")} id={id} placeholder={`from ${diapason?.from}`} />
            -
            <Input {...register("max")} placeholder={`to ${diapason?.to}`}/>
            <Button type='submit' className='rounded-full'>
                <Checked />
            </Button>
        </Form>
    )
}

export default memo(PriceSelector)
