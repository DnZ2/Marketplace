import CardListLayout from "../../../widgets/CardListLayout"
import PropTypes from 'prop-types';
import { useGetProductsQuery } from "../../../shared/redux/query/productsApi";
import Loader from "../../../shared/UI/Loader";
import CardsWrapper from "../../../shared/UI/CardsWrapper";
import MainProductCard from "../../../widgets/MainProductCard";

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
		(data?.length>0) &&
		<CardListLayout title="Related item">
			<CardsWrapper>
				{data?.products?.map((item)=>{
					if(item.id!==product.id){
						return <MainProductCard
						key={item.id}
						data={item}
					/>
					}
					return null
				})}
			</CardsWrapper>
		</CardListLayout>}
	</section>
  )
}

export default RelatedProductsByCategory
