import UserReview from "./UserReview"
import Loader from "shared/UI/Loader"
import { useGetUserReviewQuery } from "shared/redux/query/endpoints/reviewsApi"
export const UserReviewsPage = () => {
    const {data: reviews, isLoading: isReviewsLoading} = useGetUserReviewQuery()
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
