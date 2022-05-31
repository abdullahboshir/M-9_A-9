import React from 'react';
import Users from '../../hooks/userInfo';
import Reviews from '../Reviews/Reviews';
import ReviewsUi from '../ReviewsUi/ReviewsUi';

const AllReviews = () => {
    const [users, setUsers] = Users();
    return (
        <div>
            <h1>Our Customers Feedback: ({users.length})</h1>
            <div>
                <Reviews users = {users} ReviewsUi = {ReviewsUi}></Reviews>
            </div>
        </div>
    );
};

export default AllReviews;