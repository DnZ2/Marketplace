import { ComponentPropsWithoutRef, FC } from "react"

const SelectOptions: FC<ComponentPropsWithoutRef<"div">> = ({children, className}) => {
    return (
        <div className={`absolute top-full left-0 w-full z-[1] rounded-b-md ${className}`}>
            {children}
        </div>
    )
}

export default SelectOptions
