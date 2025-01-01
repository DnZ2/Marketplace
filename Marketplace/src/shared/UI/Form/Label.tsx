import { FC, ComponentPropsWithoutRef } from "react"

const Label: FC<ComponentPropsWithoutRef<"label">> = (props) => {
    const {children, className, ...otherProps} = props
    return (
        <label className={`${className} pb-2`} {...otherProps}>
            {children}
        </label>
    )
}

export default Label
