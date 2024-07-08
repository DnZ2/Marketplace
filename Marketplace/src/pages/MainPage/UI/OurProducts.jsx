import CardListLayout from "../../../widgets/Layout/CardListLayout"
import ProductCardLayout from "../../../entities/Product/UI/ProductCardLayout"
import { useGetProductsQuery } from "../../../shared/redux/query/productsApi"
import Loader from "../../../shared/UI/Loader"
const OurProducts = () => {
	const {data, isLoading} = useGetProductsQuery({})
	if(isLoading){
		return <Loader />
	}
  return (
	<CardListLayout title="Our Products" subtitle="Explore Our Products">
		<div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-y-14 gap-x-7">
			{data?.products?.map((item)=>
				<ProductCardLayout key={item.id} data={item}/>
			)}
		</div>
	</CardListLayout>
  )
}

export default OurProducts
