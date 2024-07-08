import ReviewShowCase from "../../entities/Review/ReviewShowCase"
import NumberInput from "../../features/NumberInput/NumberInput"
import FavouriteButton from "../../features/Favourite/UI/FavouriteButton"
import Button from "../../shared/UI/Button"
import DeliveryLayout from "./UI/DeliveryLayout"
import RelatedProductsByCategory from "./UI/RelatedProductsByCategory"
import ReviewCardList from "./UI/ReviewCardList"
import ProductImagesLayout from "./UI/ProductImagesLayout"
import useProductPageHook from "./useProductPageHook"
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
	const {title, price, discount, rating, description} = product
  return (
	<div className="container my-11 flex flex-col gap-16">
		<section className="h-fit">
			<div className="flex gap-8">
				<ProductImagesLayout />
				<div className="w-[30%] flex flex-col justify-between">
					<div className="flex flex-col gap-6">
						<div className="flex flex-col gap-4">
							<h1 className="text-2xl font-semibold">{title}</h1>
							<div className="flex gap-4 items-center"><ReviewShowCase rating={rating}/> | <span className="text-lime-500">In Stock</span></div>
							<h2 className="text-2xl flex gap-4">
								{!discount>0 ?
								<span>${price}</span> :
								<span>${(price  - price*discount/100).toFixed(1)}</span>
								}
								{discount>0 ?
								<span className="text-gray-400 line-through">${price}</span> :
								null}
							</h2>
						</div>
						<p>
						{description}
						</p>
						<div className="h-px bg-[#7D8184]"></div>
						<div>
							<h2 className="text-xl">Colours:</h2>
						</div>
						<div>
							<h2 className="text-xl">Size:</h2>
						</div>
						<div className="flex justify-between items-center w-full">
							<NumberInput type="secondary" handleChangeValue={handleChangeValue} handleDecreaseValue={handleDecreaseValue} handleIncreaseValue={handleIncreaseValue} value={value}/>
							<Button onClick={handleProductToCart}>{isProductInCart ? "To Cart": "Buy Now"}</Button>
							<FavouriteButton data={product} onClick={handleToggleFavouriteProduct} type="secondary"></FavouriteButton>
						</div>
					</div>
					<DeliveryLayout/>
				</div>
			</div>
		</section>
		<ReviewCardList product={product} />
		<RelatedProductsByCategory product={product} />
	</div>
  )
}

export default ProductPage
