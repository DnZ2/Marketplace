import { ComponentPropsWithoutRef, memo } from "react"
import { useSelect } from "./useSelect"

export interface Props extends ComponentPropsWithoutRef<"div">{}

const SelectTrigger = (props: Props) => {
    const {children, className, ...otherProps} = props
    const {onOpen} = useSelect()
    return (
        <div onClick={onOpen} className={`relative flex w-full ${className}`} {...otherProps}>
            {children}
        </div>
    )
}

export default memo(SelectTrigger)