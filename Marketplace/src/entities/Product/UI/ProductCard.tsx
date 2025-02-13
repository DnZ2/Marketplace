import { ComponentPropsWithoutRef, FC } from "react"

const ProductCard: FC<ComponentPropsWithoutRef<"div">> = ({className, children}) => {
    return (
        <div className={`flex flex-col gap-4 ${className}`}>
            {children}
        </div>
    )
}

export default ProductCard
