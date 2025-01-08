import DeliveryLayout from "../../UI/DeliveryLayout"
import Button from "../../../../shared/UI/Button/Button"
import ReviewShowCase from "../../../../entities/Review/ReviewShowCase"
import {ProductPrice} from "../../../../entities/Product/UI"
import usePageProductCardActions from "../usePageProductCardActions"
import FavouriteButton from "../../../../features/Favourite/UI/ToggleFavouriteButton"
import ProductNumberInput from "./ProductNumberInput"
import { Product } from "shared/redux/query/endpoints"

interface Props{
    product: Product
}

const ProductPageCard = (props: Props) => {
    const {product} = props
    const {title, rating, currentPrice, price, description, maxQuantity} = product
    const {
        numberInputRef,
        isProductInCart,
        handleProductToCart,
        handleToggleFavouriteProduct
    } = usePageProductCardActions(product)
    return (
        <div className="flex flex-col gap-10 min-w-0">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold">{title}</h1>
                    <div className="flex items-center divide-x-2 divide-gray-300 divide [&>div]:pr-2 [&>span]:pl-2">
                        <ReviewShowCase rating={rating}/>
                        {maxQuantity===0 ? <span className="text-red-400">Out of Stock</span> : <span className="text-lime-500">In Stock</span>}
                    </div>
                    <ProductPrice currentPrice={currentPrice} price={price} className="text-2xl"/>
                </div>
                <p className="text-sm break-words">{description}</p>
                <div className="h-px bg-[#7D8184]"></div>
                <div className="flex gap-4 items-center">
                    {maxQuantity>0 &&
                    <>
                        <ProductNumberInput ref={numberInputRef} data={product}/>
                        <Button onClick={handleProductToCart}>{isProductInCart ? "To Cart": "Buy Now"}</Button>
                    </> }
                    <FavouriteButton data={product} onClick={handleToggleFavouriteProduct} variant="icon"></FavouriteButton>
                </div>
            </div>
            <DeliveryLayout/>
        </div>
    )
}

export default ProductPageCard