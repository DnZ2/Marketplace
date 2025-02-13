import { ComponentPropsWithoutRef, FC, memo,  } from "react"

const TopLeftSide: FC<ComponentPropsWithoutRef<"div">> = ({children, className}) => {
    return (
        <div className={`absolute left-3 top-3 flex flex-col gap-1 ${className}`}>
            {children}
        </div>
    )
}

export default memo(TopLeftSide)
