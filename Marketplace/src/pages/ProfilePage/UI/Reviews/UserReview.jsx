import PropTypes from 'prop-types';
import ReviewCard from '../../../../entities/Review/ReviewCard';
const UserReview = ({review}) => {
	UserReview.propTypes ={
		review: PropTypes.object,
	}
  return (
	<div>
		<ReviewCard data={review}/>
	</div>
  )
}

export default UserReview
