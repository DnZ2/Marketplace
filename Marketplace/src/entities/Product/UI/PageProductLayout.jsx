import DeliveryLayout from "../../../pages/ProductPage/UI/DeliveryLayout"
import NumberInput from "../../../shared/UI/NumberInput"
import Button from "../../../shared/UI/Button"
import ReviewShowCase from "../../Review/ReviewShowCase"
import Price from "./ProductPrice"
import { useNumberInputHook } from "../../../features/NumberInput/NumberInputHook"
import usePageProductCardActions from "../usePageProductCardActions"
import FavouriteButton from "../../../features/Favourite/UI/FavouriteButton"
import PropTypes from "prop-types"
const PageProductLayout = ({product}) => {
	const {title, rating, currentPrice, price, description, maxQuantity} = product
	const {
		handleChangeValue,
		handleDecreaseValue,
		handleIncreaseValue,
		value,
	} = useNumberInputHook(1, maxQuantity);
	const {
		isProductInCart,
		handleProductToCart,
		handleToggleFavouriteProduct
	} = usePageProductCardActions(product, value)
  return (
	<div className="flex flex-col gap-10 min-w-0">
		<div className="flex flex-col gap-6">
			<div className="flex flex-col gap-4">
				<h1 className="text-2xl font-semibold">{title}</h1>
				<div className="flex items-center divide-x-2 divide-gray-300 divide [&>div]:pr-2 [&>span]:pl-2">
					<ReviewShowCase rating={rating}/>
					{maxQuantity===0 ? <span className="text-red-400">Out of Stock</span> : <span className="text-lime-500">In Stock</span>}
				</div>
				<Price currentPrice={currentPrice} price={price} className="text-2xl"/>
			</div>
			<p className="text-sm break-words">
			{description}
			</p>
			<div className="h-px bg-[#7D8184]"></div>
			<div className="flex gap-4 items-center">
				{maxQuantity>0 &&
				<>
				<NumberInput type="secondary" handleChangeValue={handleChangeValue} handleDecreaseValue={handleDecreaseValue} handleIncreaseValue={handleIncreaseValue} value={value}/>
				<Button onClick={handleProductToCart}>{isProductInCart ? "To Cart": "Buy Now"}</Button>
				</> }
				<FavouriteButton data={product} onClick={handleToggleFavouriteProduct} variant="icon"></FavouriteButton>
			</div>
		</div>
		<DeliveryLayout/>
	</div>

  )
}
PageProductLayout.propTypes = {
	product: PropTypes.object,
}

export default PageProductLayout
