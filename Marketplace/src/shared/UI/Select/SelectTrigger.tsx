import { ComponentPropsWithoutRef } from "react"

interface Props extends ComponentPropsWithoutRef<"div">{}

const SelectTrigger = (props: Props) => {
    const {children, className, ...otherProps} = props
    return (
        <div className={`relative flex w-full ${className}`} {...otherProps}>
            {children}
        </div>
    )
}

export default SelectTrigger