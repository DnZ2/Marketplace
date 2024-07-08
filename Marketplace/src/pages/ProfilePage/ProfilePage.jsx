import { useSelector } from "react-redux"
import { useGetOrdersQuery } from "../../shared/redux/query/usersApi"
import Loader from "../../shared/UI/Loader"
import UserOrder from "./UI/UserOrder"
import UserReview from "./UI/UserReview"
import { useGetUserReviewQuery } from "../../shared/redux/query/reviewsApi"
const ProfilePage = () => {
	const userId = useSelector(state=>state.user.userId)
	const {data: orders, isOrdersLoading} = useGetOrdersQuery(userId)
	const {data: reviews, isReviewsLoading} = useGetUserReviewQuery(userId)

	if(isOrdersLoading || isReviewsLoading){
		return <Loader />
	}
  return (
	<div className="container my-20 ">
		<h1 className="text-2xl mb-7">My orders</h1>
		<div  className="flex flex-col gap-2 mb-7">
			{
				orders?.map((item)=>
					<UserOrder key={item.id} order={item}/>
				)
			}
		</div>
		<h1 className="text-2xl mb-7">My Reviews</h1>
		<div className="flex flex-col gap-2">
		{
				reviews?.map((item)=>
					<UserReview key={item.id} review={item}/>
				)
		}
		</div>
	</div>
  )
}

export default ProfilePage
