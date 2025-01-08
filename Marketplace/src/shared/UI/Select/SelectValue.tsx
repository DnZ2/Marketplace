import { forwardRef, ForwardRefRenderFunction } from "react"
import Input from "../Input/Input"
import { Props } from "../Input/Input"

const SelectValue: ForwardRefRenderFunction<HTMLInputElement, Props> = (props, ref)=> {
    const {className, ...otherProps} = props
    return (
        <Input ref={ref} className={`rounded-md ${className}`} {...otherProps}/>
    )
}

export default forwardRef(SelectValue)
