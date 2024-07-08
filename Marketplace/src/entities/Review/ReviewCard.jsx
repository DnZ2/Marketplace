import PropTypes from 'prop-types';
import UserProfile from "../../assets/profile-user.svg?react"
import { convertDate } from '../../shared/utils/convertDate';
const ReviewCard = ({data}) => {
	ReviewCard.propTypes={
		data: PropTypes.object,
	}
	const createdAt = convertDate(data)
  return (
	<div className='flex flex-col gap-2 bg-gray-200 p-4'>
		<div className='flex items-center gap-3'><UserProfile /> {data.userId?.email}</div>
		<div className=''>{createdAt}</div>
		<div className='flex items-center gap-1'>
			<div className="relative flex items-center gap-[10px] text-xl before:content-['★★★★★'] before:block before:text-[#7d8184] before:w-fit">
				<div className="absolute h-full top-0 left-0 overflow-hidden before:content-['★★★★★'] before:absolute before:text-[#ffd300] before:w-full before:h-full before:top-0 before:left-0 " style={{width: data.rating*20+"%"}}></div>
			</div>
		</div>
		<p>{data.text}</p>
	</div>
  )
}

export default ReviewCard
