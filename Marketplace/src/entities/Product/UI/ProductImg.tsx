import { ComponentPropsWithoutRef, FC } from "react"

const ProductImg: FC<ComponentPropsWithoutRef<"img">> = ({className, ...props}) => {
    return (
        <img className={`object-contain ${className}`} {...props}/>
    )
}

export default ProductImg