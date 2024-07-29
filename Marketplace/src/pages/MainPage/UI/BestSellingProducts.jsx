import CardListLayout from "../../../widgets/CardListLayout"
import MainProductLayout from "../../../entities/Product/UI/MainProductLayout"
import Button from "../../../shared/UI/Button"
import { useGetProductsQuery } from "../../../shared/redux/query/productsApi"
import Loader from "../../../shared/UI/Loader"
import Test from "../../../assets/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png"

const BestSellingProducts = () => {
	const {data, isLoading} = useGetProductsQuery({})
	if(isLoading){
		return <Loader/>
	}
  return (
	<CardListLayout title="This Month" subtitle="Best Selling Products" controls={<Button>View All</Button>}>
		<div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-y-14 gap-x-7">
			{data?.products?.map((item)=>
			<MainProductLayout key={item.id} data={item} image={Test}/>
			)}
		</div>
	</CardListLayout>
  )
}

export default BestSellingProducts
