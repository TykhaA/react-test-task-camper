import { Rating } from 'react-simple-star-rating';
import './review.scss';

const Reviews = ({ reviews }) => {
  return reviews.map(item => (
    <div className="reviews" key={item.reviewer_name}>
      <div className="reviews_user">
        <div className="reviews_user_avatar">{item.reviewer_name[0]}</div>
        <div className="reviews_user_info">
          <span className="reviews_user_name">{item.reviewer_name}</span>
          <Rating initialValue={item.reviewer_rating} readonly size={16} />
        </div>
      </div>
      <div className="reviews_text">{item.comment}</div>
    </div>
  ));
};

export default Reviews;
