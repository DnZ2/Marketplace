import ReviewCard from "../../../entities/Review/ReviewCard"
import PropTypes from 'prop-types';
import { useGetProductReviewQuery } from "../../../shared/redux/query/reviewsApi";
import Loader from "../../../shared/UI/Loader";
const ReviewCardList = ({product}) => {
	ReviewCardList.propTypes ={
		product: PropTypes.object,
	}
	const {data: reviews, isLoading} = useGetProductReviewQuery(product?.id)

	if(isLoading){
		return <Loader />
	}
  return (
	<section>
	{!reviews.length
	? <span className="flex justify-center items-center text-gray-500">No reviews</span>
	: <>
		<h1 className="text-3xl pb-8">Reviews</h1>
		<div className="flex flex-col gap-2">
		{reviews?.map((item)=>
			<ReviewCard key={item.id} data={item}/>
		)}
		</div>
	</>
	}

	</section>
  )
}

export default ReviewCardList
