import CardListLayout from "../../../widgets/Layout/CardListLayout"
import ProductCardLayout from "../../../entities/Product/UI/ProductCardLayout"
import Button from "../../../shared/UI/Button"
import { useGetProductsQuery } from "../../../shared/redux/query/productsApi"
import Loader from "../../../shared/UI/Loader"
const BestSellingProducts = () => {
	const {data, isLoading} = useGetProductsQuery({})
	if(isLoading){
		return <Loader/>
	}
  return (
	<CardListLayout title="This Month" subtitle="Best Selling Products" controls={<Button>View All</Button>}>
		<div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-y-14 gap-x-7">
			{data?.products?.map((item)=>
			<ProductCardLayout key={item.id} data={item}/>
			)}
		</div>
	</CardListLayout>
  )
}

export default BestSellingProducts
