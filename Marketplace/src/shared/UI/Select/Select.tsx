import { ComponentPropsWithoutRef, forwardRef, ForwardRefRenderFunction } from "react"

interface Props extends ComponentPropsWithoutRef<"div">{}

const Select: ForwardRefRenderFunction<HTMLDivElement,Props> = (props, ref) => {
    const {children, className, ...otherProps} = props
    return (
        <div ref={ref} className={`relative ${className}`} {...otherProps}>
            {children}
        </div>
    )
}

export default forwardRef(Select)
