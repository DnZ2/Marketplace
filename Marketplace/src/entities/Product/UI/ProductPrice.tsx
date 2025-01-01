import { ComponentPropsWithoutRef, FC } from "react"

interface Props extends ComponentPropsWithoutRef<"div">{
	price: number
	currentPrice: number
}

const ProductPrice: FC<Props> = ({price, currentPrice, className}) => {
    if(currentPrice === price) return (
        <div className={`flex gap-3 ${className}`}>
            <span>${price}</span>
        </div>
    )
    return (
        <div className={`flex gap-3 ${className}`}>
            <span className='text-[#DB4444]'>${currentPrice}</span>
            <span className="text-gray-400 line-through">${price}</span>
        </div>
    )
}

export default ProductPrice
