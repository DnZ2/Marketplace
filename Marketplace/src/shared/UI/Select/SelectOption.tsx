import { ComponentPropsWithoutRef, FC } from "react"

const SelectOption: FC<ComponentPropsWithoutRef<"button">> = ({children, className, ...props}) => {
    return (
        <button className={`flex items-center justify-between w-full p-2 ${className}`} {...props}>
            {children}
        </button>
    )
}

export default SelectOption
