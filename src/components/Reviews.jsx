import React from 'react';

import Review from './Review';
import importAll from '../../utils/importAll';

const ratings = importAll(require.context('../../assets/images/stars', false, /\.(jpe?g|png|gif|svg)$/));
const reviewerPortraits = importAll(require.context('../../assets/images/reviewers', false, /\.(jpe?g|png|gif|svg)$/));

const Reviews = () => (
    <div className="reviews-container">
        {
            reviewerPortraits.map((reviewerPortrait, idx) => <Review
                key={idx}
                reviewerPortrait={reviewerPortrait}
                ratings={ratings}
                appearanceDelay={idx + 1}
            />)
        }
    </div>
);

export default Reviews;
