import Plus from "../../../assets/plus-svgrepo-com.svg?react"
import Accept from "../../../assets/checked-svgrepo-com.svg?react"
import { ComponentPropsWithoutRef, forwardRef, ForwardRefRenderFunction } from "react"

interface Props extends ComponentPropsWithoutRef<"button">{
    isOpen: boolean 
}

const AddCategoryButton: ForwardRefRenderFunction<HTMLInputElement, Props> = ({isOpen, ...props}, ref) => {
    return (
        <div className="flex flex-col items-center justify-between w-full">
            <button type="button" {...props} className="flex items-center justify-between w-full p-2 hover:bg-gray-100">Add category <Plus /></button>
            {isOpen &&
            <div className="relative w-full [&>input]:w-full">
                <input ref={ref} type="text" className="p-2 bg-[#f5f5f5]"/>
                <button type="button" className="absolute top-1/2 right-2 -translate-y-1/2 hover:bg-white rounded-full p-[6px]"><Accept /></button>
            </div>
            }
        </div>
    )
}
export default forwardRef(AddCategoryButton)
