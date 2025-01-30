import { ProductCategorySelect } from "features/ProductQueryActions/UI"
import { useController } from "react-hook-form"
import useEvent from "react-use-event-hook"
import { Control } from "react-hook-form"

interface Props {
    control: Control<FormValues>
}

interface FormValues{
    discount?: number | undefined;
    title: string;
    category: string;
    price: number;
    maxQuantity: number;
    description: string;
}

const CategoryInput = ({ control }: Props)=> {
    const {
        field,
    } = useController({
        name: "category",
        control,
    })

    const onSelect = useEvent((value)=>field.onChange(value))
    const onReset = useEvent(()=>field.onChange(""))
    const onClose = useEvent((value)=>field.onChange(value))
    return (
        <ProductCategorySelect category="" onSelect={onSelect} onReset={onReset} onClose={onClose} />
    )
}

export default CategoryInput
