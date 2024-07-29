import { useState } from 'react';

const StarRatingForm = () => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("")
  const handleRatingChange = (value) => {
    setRating(value);
  };
  const handleInputReviewText = ({target})=>{
	setReviewText(target.value)
  }
  return (
    <form>
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
				checked={value === rating}
				onChange={() => handleRatingChange(value)}
				/>
				<span className="text-6xl">&#9733;</span>
				<span
				className={`absolute left-0 text-6xl ${
					value <= rating ? 'text-yellow-400' : 'text-gray-400'
				}`}
				style={{ zIndex: 1 }}
				aria-hidden="true"
				>
				&#9733;
				</span>
			</label>
			))}
		</div>
		<textarea name="reviewText" className='w-full outline-none p-4 text-xl' maxLength={1000} value={reviewText} onChange={handleInputReviewText}/>
    </form>
  );
};

export default StarRatingForm;