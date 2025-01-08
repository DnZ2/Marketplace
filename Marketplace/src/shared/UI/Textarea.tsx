import { ComponentPropsWithoutRef, forwardRef, ForwardRefRenderFunction, memo } from "react"

interface Props extends ComponentPropsWithoutRef<"textarea">{}

const Textarea: ForwardRefRenderFunction<HTMLTextAreaElement, Props> = (props, ref) => {
    const {className,...otherProps} = props
    return (
        <textarea ref={ref} className={`p-3 resize-none focus:outline-1 focus:outline -outline-offset-1 border border-[#00000040] rounded-md ${className}`} {...otherProps}/>
    )
}

export default memo(forwardRef(Textarea))
