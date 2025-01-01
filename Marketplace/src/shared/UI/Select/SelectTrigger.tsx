import { ComponentPropsWithoutRef, FC } from "react"

const SelectTrigger: FC<ComponentPropsWithoutRef<"div">> = ({children, className, ...props}) => {
    return (
        <div className={`relative flex w-full ${className}`} {...props}>
            {children}
        </div>
    )
}

export default SelectTrigger