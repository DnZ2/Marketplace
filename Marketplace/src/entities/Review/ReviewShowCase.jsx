import PropTypes from 'prop-types';

const ReviewShowCase = ({rating={}}) => {
	ReviewShowCase.propTypes ={
		rating: PropTypes.object,
	}
	const sums = Object.entries(rating).reduce((sum, [rating, count]) => sum + rating * count,	0)
	const length = Object.values(rating).reduce((sum, count) => sum + count, 0)
	const percent = sums / length * 20
  return (
	<div className='flex items-center gap-1'>
		<div className="relative flex items-center gap-[10px] text-xl before:content-['★★★★★'] before:block before:text-[#7d8184] before:w-fit">
			<div className="absolute h-full top-0 left-0 overflow-hidden before:content-['★★★★★'] before:absolute before:text-[#ffd300] before:w-full before:h-full before:top-0 before:left-0 " style={{width: percent+"%"}}></div>
		</div>
		<span className='text-sm text-[#7d8184]'>{`(${length})`}</span>
	</div>
  )
}

export default ReviewShowCase
