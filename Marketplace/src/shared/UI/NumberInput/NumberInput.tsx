import { ComponentPropsWithRef, ForwardRefRenderFunction, forwardRef } from "react"

interface Props extends ComponentPropsWithRef<"input">{
	maxWidthInput: string
}

const NumberInput: ForwardRefRenderFunction<HTMLInputElement, Props> = ({maxWidthInput=80,className,...props}, ref)=> {
    return (
        <input ref={ref} style={{maxWidth: `${maxWidthInput}px`}} className={`${className} rounded-md`} type="number" {...props}/>
    )
}

export default forwardRef(NumberInput)
