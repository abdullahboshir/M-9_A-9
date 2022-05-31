import React from 'react';
import './reviewsUi.css'

const ReviewsUi = ({reviewDetails}) => {
    const {name, email, img, body} = reviewDetails;
    return (
          <div className='reviews'>
         <div className='comment-img-name'>
            <img src={img} alt="" />
            <h2>{name}</h2>
          </div>
          <div className='comment-details'>
           <p title={body}>
           {body.length > 20? body.slice(0, 160) + "..." : body} </p>
           <h3><small>Email:{email}</small></h3>
          </div>
          </div>
    );
};

export default ReviewsUi;