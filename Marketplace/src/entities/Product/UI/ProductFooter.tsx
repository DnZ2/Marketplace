import { ComponentPropsWithoutRef, FC, memo } from "react"

const ProductFooter: FC<ComponentPropsWithoutRef<"div">> = ({className, children}) => {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {children}
        </div>
    )
}

export default memo(ProductFooter)
