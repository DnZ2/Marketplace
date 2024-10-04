import RelatedProductsByCategory from "./UI/RelatedProductsByCategory"
import ReviewCardList from "./UI/ReviewCardList"
import ProductImagesLayout from "./UI/ProductImagesLayout"
import ScrollButton from "../../features/ScrollButton"
import Loader from "../../shared/UI/Loader"
import { useParams } from "react-router-dom"
import { useGetProductQuery } from "../../shared/redux/query/productsApi"
import PageProductLayout from "../../entities/Product/UI/PageProductLayout"
const ProductPage = () => {
	const { id } = useParams();
	const { data: product, isLoading } = useGetProductQuery(id);
	if(isLoading){
		return <Loader />
	}
  return (
	<>
	<div className="container my-11 flex flex-col gap-16">
		<section className="flex gap-16">
			<ProductImagesLayout />
			<PageProductLayout product={product}/>
		</section>
		<ReviewCardList product={product} />
		<RelatedProductsByCategory product={product} />
	</div>
	<ScrollButton />
	</>
  )
}

export default ProductPage
