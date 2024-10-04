import { useSelector } from "react-redux"
import UserReview from "../../UI/Reviews/UserReview"
import Loader from "../../../../shared/UI/Loader"
import { useGetUserReviewQuery } from "../../../../shared/redux/query/reviewsApi"
const UserReviewsPage = () => {
	const userId = useSelector(state=>state.user.id)
	const {data: reviews, isReviewsLoading} = useGetUserReviewQuery(userId, {skip: !userId})
	if(isReviewsLoading){
		return <Loader />
	}return (
	<>
		<h1 className="text-2xl mb-7">My Reviews</h1>
		<div className="flex flex-col gap-2">
			{
				reviews?.map((item)=>
					<UserReview key={item.id} review={item}/>
				)
			}
		</div>
	</>
  )
}

export default UserReviewsPage
