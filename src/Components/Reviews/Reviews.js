import React from 'react';
import './reviews.css'

const Reviews = ({users, ReviewsUi}) => {
  console.log(ReviewsUi)
    return (
      <div className='reviews-container'>
  
          {
            users.map(reviewDetails => <ReviewsUi
            key={reviewDetails.id}
            reviewDetails = {reviewDetails}
            />)
          }
        </div>
    );
};

export default Reviews;