import { ComponentPropsWithoutRef, memo } from "react"

const Label = (props: ComponentPropsWithoutRef<"label">) => {
    const {children, className, ...otherProps} = props
    return (
        <label className={`${className} pb-2`} {...otherProps}>
            {children}
        </label>
    )
}

export default memo(Label)
