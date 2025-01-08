import { ComponentPropsWithoutRef } from "react"

interface Props extends ComponentPropsWithoutRef<"button">{}

const SelectOption = (props: Props) => {
    const {children, className, ...otherProps} = props
    return (
        <button className={`flex items-center justify-between w-full p-2 ${className}`} {...otherProps}>
            {children}
        </button>
    )
}

export default SelectOption
