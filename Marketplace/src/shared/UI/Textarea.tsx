import { ComponentPropsWithoutRef, forwardRef, ForwardRefRenderFunction } from "react"

const Textarea: ForwardRefRenderFunction<HTMLTextAreaElement, ComponentPropsWithoutRef<"textarea">> = ({className,...props}, ref) => {
    return (
        <textarea ref={ref} className={`p-3 resize-none focus:outline-1 focus:outline -outline-offset-1 border border-[#00000040] rounded-md ${className}`} {...props}/>
    )
}

export default forwardRef(Textarea)
