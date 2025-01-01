import { ComponentPropsWithoutRef, FC } from "react"

interface Props extends ComponentPropsWithoutRef<"div">{
	isDiscount?: boolean,
	isNew?: boolean
}

const ProductBadge: FC<Props> = ({isDiscount, isNew, children}) => {
    if(!isDiscount && !isNew) return null
    return (
        <div className={`bg-[#DB4444] ${isNew && "bg-[#18864B]"} rounded-md text-xs px-3 py-1 flex justify-center items-center text-[#F5F5F5]`}>
            {children}
        </div>
    )
}

export default ProductBadge
