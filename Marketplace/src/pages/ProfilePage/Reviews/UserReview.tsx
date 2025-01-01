import PropTypes from 'prop-types';
import ReviewCard from 'entities/Review/ReviewCard';
const UserReview = ({review}) => {

    return (
        <div>
            <ReviewCard data={review}/>
        </div>
    )
}
UserReview.propTypes ={
    review: PropTypes.object,
}
export default UserReview
