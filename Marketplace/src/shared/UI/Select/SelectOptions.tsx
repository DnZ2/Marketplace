import { ComponentPropsWithoutRef, FC } from "react"

interface Props extends ComponentPropsWithoutRef<"div">{
    isActive: boolean
}

const SelectOptions: FC<Props> = ({children, className, isActive}) => {
    if(!isActive) return null
    return (
        <div className={`absolute top-full left-0 w-full z-[1] rounded-b-md ${className}`}>
            {children}
        </div>
    )
}

export default SelectOptions
