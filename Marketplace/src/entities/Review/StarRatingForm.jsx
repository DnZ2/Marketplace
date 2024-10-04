import { useState } from 'react';
import PropTypes from 'prop-types';

const StarRatingForm = ({ onSubmit, ...props}) => {
	const [ratingValue, setRating] = useState(0);
	const [reviewText, setReviewText] = useState("")
	const handleRatingChange = (value) => {
		setRating(value);
	};
	const handleInputReviewText = ({target})=>{
		setReviewText(target.value)
	}
  return (
    <form id="review-form" {...props} onSubmit={()=>onSubmit(event, reviewText, ratingValue)}>
		<div className="flex justify-center">
			{[1, 2, 3, 4, 5].map((value) => (
			<label
				key={value}
				className="relative inline-block cursor-pointer"
			>
				<input
				type="radio"
				name="rating"
				value={value}
				className="hidden"
				checked={value === ratingValue}
				onChange={() => handleRatingChange(value)}
				/>
				<span className="text-6xl">&#9733;</span>
				<span
				className={`absolute left-0 text-6xl ${
					value <= ratingValue ? 'text-yellow-400' : 'text-gray-400'
				}`}
				style={{ zIndex: 1 }}
				aria-hidden="true"
				>
				&#9733;
				</span>
			</label>
			))}
		</div>
		<textarea className='w-[500px] h-[300px] rounded-lg outline-none p-4' maxLength={1000} value={reviewText} placeholder='Your review' onChange={handleInputReviewText}/>
    </form>
  );
};
StarRatingForm.propTypes={
	onSubmit: PropTypes.func,
}
export default StarRatingForm;