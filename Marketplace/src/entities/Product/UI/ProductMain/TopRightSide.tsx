import { ComponentPropsWithoutRef, FC, memo } from "react"

const TopRightSide: FC<ComponentPropsWithoutRef<"div">> = ({children, className}) => {
    return (
        <div className={`absolute right-3 top-3 flex flex-col gap-2 ${className}`}>
            {children}
        </div>
    )
}
export default memo(TopRightSide)