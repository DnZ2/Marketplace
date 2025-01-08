import UpdateReviewButton from "features/ReviewActions/UpdateReviewButton"
import { UserReview } from "shared/redux/query/endpoints"

interface Props {
    review: UserReview
}

const UserReviewCard = (props: Props) => {
    const {review} = props
    return (
        <div className='flex flex-col gap-2 bg-gray-200 p-4'>
            <div className='flex items-center gap-3'>
                {review.productId.title}
            </div>
            <div className=''>{review.createdAt.date}</div>
            <div className="relative flex items-center w-fit text-xl before:content-['★★★★★'] before:text-[#7d8184]">
                <div className="absolute overflow-hidden before:content-['★★★★★'] before:text-[#ffd300]" style={{width: review.rating*20+"%"}}></div>
            </div>
            <p>{review.reviewText}</p>
            <UpdateReviewButton review={review}/>
        </div>
    )
}
export default UserReviewCard