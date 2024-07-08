import CardListLayout from "../../../widgets/Layout/CardListLayout"
import ProductCardLayout from "../../../entities/Product/UI/ProductCardLayout"
import PropTypes from 'prop-types';
import { useGetProductsQuery } from "../../../shared/redux/query/productsApi";
import Loader from "../../../shared/UI/Loader";

const RelatedProductsByCategory = ({product}) => {
	RelatedProductsByCategory.propTypes ={
		product: PropTypes.object,
	}
	const {data, isLoading} = useGetProductsQuery({categoryParam: product?.category}, {skip: !product})
	if(isLoading){
		return <Loader />
	}
  return (
	<section className="w-full">
		{!data.length==1
		? null
		:
		<CardListLayout title="Related item">
			<div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-y-14 gap-x-7">
				{data?.products?.map((item)=>{
					if(item.id!==product.id){
						return <ProductCardLayout
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
