import { ComponentPropsWithoutRef } from "react"

interface Props extends ComponentPropsWithoutRef<"div">{
    isActive: boolean
}

const SelectOptions = (props: Props) => {
    const {children, className, isActive, ...otherProps} = props
    if(!isActive) return null
    return (
        <div className={`absolute top-full left-0 w-full z-[1] rounded-b-md ${className}`} {...otherProps}>
            {children}
        </div>
    )
}

export default SelectOptions
