import { ComponentPropsWithoutRef, forwardRef, ForwardRefRenderFunction } from "react"

const SelectSearch: ForwardRefRenderFunction<HTMLInputElement, ComponentPropsWithoutRef<"input">> = ({className, ...props}, ref)=> {
    return (
        <input ref={ref} className={`rounded-md relative ${className}`} {...props} placeholder="Find your option"/>
    )
}

export default forwardRef(SelectSearch)
