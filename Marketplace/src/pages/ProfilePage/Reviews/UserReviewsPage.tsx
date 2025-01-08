import UserReviewCard from "entities/Review/UserReviewCard"
import Loader from "shared/UI/Loader"
import { useGetUserReviewQuery } from "shared/redux/query/endpoints/reviewsApi"
export const UserReviewsPage = () => {
    const {data: reviews, isLoading: isReviewsLoading} = useGetUserReviewQuery()
    if(isReviewsLoading || !reviews){
        return <Loader />
    }
    return (
        <>
            <h1 className="text-2xl mb-7">My Reviews</h1>
            <div className="flex flex-col gap-2">
                {
                    reviews?.map((review)=>
                        <UserReviewCard key={review.id} review={review}/>
                    )
                }
            </div>
        </>
    )
}
