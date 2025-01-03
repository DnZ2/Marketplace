import { forwardRef, ForwardRefRenderFunction } from "react"
import Input from "../Input/Input"
import { Props } from "../Input/Input"

const SelectValue: ForwardRefRenderFunction<HTMLInputElement, Props> = ({className, ...props}, ref)=> {
    return (
        <Input ref={ref} className={`rounded-md ${className}`} {...props}/>
    )
}

export default forwardRef(SelectValue)
