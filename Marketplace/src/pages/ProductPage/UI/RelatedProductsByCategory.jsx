import CardListLayout from "../../../widgets/CardListLayout"
import MainProductLayout from "../../../entities/Product/UI/MainProductLayout"
import PropTypes from 'prop-types';
import { useGetProductsQuery } from "../../../shared/redux/query/productsApi";
import Loader from "../../../shared/UI/Loader";

const RelatedProductsByCategory = ({product}) => {
	RelatedProductsByCategory.propTypes ={
		product: PropTypes.object,
	}
	const {data, isLoading} = useGetProductsQuery({categoryParam: product?.category, limitParam: 4}, {skip: !product})
	if(isLoading){
		return <Loader />
	}
  return (
	<section className="w-full">
		{
		!(data?.length===1) &&
		<CardListLayout title="Related item">
			<div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-y-14 gap-x-7">
				{data?.products?.map((item)=>{
					if(item.id!==product.id){
						return <MainProductLayout
						key={item.id}
						data={item}
					/>
					}
					return null
				})}
			</div>
		</CardListLayout>}
	</section>
  )
}

export default RelatedProductsByCategory
