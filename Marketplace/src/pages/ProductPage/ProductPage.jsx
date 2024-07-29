import ReviewShowCase from "../../entities/Review/ReviewShowCase"
import NumberInput from "../../features/NumberInput/NumberInput"
import FavouriteButton from "../../features/Favourite/UI/FavouriteButton"
import Button from "../../shared/UI/Button"
import DeliveryLayout from "./UI/DeliveryLayout"
import RelatedProductsByCategory from "./UI/RelatedProductsByCategory"
import ReviewCardList from "./UI/ReviewCardList"
import ProductImagesLayout from "./UI/ProductImagesLayout"
import useProductPageHook from "./useProductPageHook"
import ScrollButton from "../../features/ScrollButton"
import Loader from "../../shared/UI/Loader"
const ProductPage = () => {
	const {
		value,
		product,
		isLoading,
		isProductInCart,
		handleChangeValue,
		handleDecreaseValue,
		handleIncreaseValue,
		handleProductToCart,
		handleToggleFavouriteProduct,
	} = useProductPageHook()

	if(isLoading){
		return <Loader />
	}
	const {title, price, currentPrice, discount, rating, description, maxQuantity} = product
  return (
	<>
	<div className="container my-11 flex flex-col gap-16">
		<section className="flex gap-16">
				<ProductImagesLayout />
				<div className="flex flex-col gap-10 min-w-0">
					<div className="flex flex-col gap-6">
						<div className="flex flex-col gap-4">
							<h1 className="text-2xl font-semibold">{title}</h1>
							<div className="flex gap-4 items-center"><ReviewShowCase rating={rating}/> | {maxQuantity===0 ? <span className="text-red-400">Out of Stock</span> : <span className="text-lime-500">In Stock</span>}</div>
							<h2 className="text-2xl flex gap-4">
								{discount>0 ?
								<>
									<span>${currentPrice}</span>
									<span className="text-gray-400 line-through">${price}</span>
								</>
								:
								<span>${price}</span>
								}
							</h2>
						</div>
						<p className="text-sm break-words">
						{description}
						</p>
						<div className="h-px bg-[#7D8184]"></div>
						<div className="flex gap-4 items-center">
							{maxQuantity ?
							<>
							<NumberInput type="secondary" handleChangeValue={handleChangeValue} handleDecreaseValue={handleDecreaseValue} handleIncreaseValue={handleIncreaseValue} value={value}/>
							<Button center="" onClick={handleProductToCart}>{isProductInCart ? "To Cart": "Buy Now"}</Button>
							</> : null}
							<FavouriteButton data={product} onClick={handleToggleFavouriteProduct} type="secondary"></FavouriteButton>
						</div>
					</div>
					<DeliveryLayout/>
				</div>
		</section>
		<ReviewCardList product={product} />
		<RelatedProductsByCategory product={product} />
	</div>
	<ScrollButton />
	</>
  )
}

export default ProductPage
