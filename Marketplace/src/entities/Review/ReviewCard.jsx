import PropTypes from 'prop-types';
import UserProfile from "../../assets/profile-user.svg?react"
import { convertDate } from '../../shared/utils/convertDate';
const ReviewCard = ({data}) => {
	ReviewCard.propTypes={
		data: PropTypes.object,
	}
  return (
	<div className='flex flex-col gap-2 bg-gray-200 p-4'>
		<div className='flex items-center gap-3'><UserProfile /> {data.userId?.email} </div>
		<div className=''>{convertDate(data.createdAt)}</div>
		<div className="relative flex items-center w-fit text-xl before:content-['★★★★★'] before:text-[#7d8184]">
			<div className="absolute overflow-hidden before:content-['★★★★★'] before:text-[#ffd300]" style={{width: data.rating*20+"%"}}></div>
		</div>
		<p>{data.reviewText}</p>
	</div>
  )
}

export default ReviewCard
