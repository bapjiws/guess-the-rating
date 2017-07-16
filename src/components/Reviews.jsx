import React from 'react';

import Review from './Review';
import importAll from '../../utils/importAll';

import reviews from '../../assets/reviews';
const ratings = importAll(require.context('../../assets/images/stars', false, /\.(jpe?g|png|gif|svg)$/));
const reviewerPortraits = importAll(require.context('../../assets/images/reviewers', false, /\.(jpe?g|png|gif|svg)$/));

const Reviews = () => (
    <div className="reviews-container">
        {
            // TODO: correctly bind reviews to portraits
            reviews.map((review, idx) => <Review
                key={idx}
                reviewerPortrait={reviewerPortraits[idx]}
                ratings={ratings}
                appearanceDelay={idx + 1}
                fullName={review.fullName}
                location={review.location}
                reviewTitle={review.reviewTitle}
                reviewBody={review.reviewBody}
            />)
        }
    </div>
);

export default Reviews;
