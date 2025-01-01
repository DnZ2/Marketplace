import { ComponentPropsWithoutRef, forwardRef, ForwardRefRenderFunction } from "react"

const Select: ForwardRefRenderFunction<HTMLDivElement, ComponentPropsWithoutRef<"div">> = ({children, className, ...props}, ref) => {
    return (
        <div ref={ref} className={`relative ${className}`} {...props}>
            {children}
        </div>
    )
}

export default forwardRef(Select)
