import React from 'react';

import Review from './Review';
import { importAllAsArray, importAllAsObject, generatePortraitKey} from '../../utils/importAll';

import reviews from '../../assets/reviews';
const ratings = importAllAsArray(require.context('../../assets/images/stars', false, /\.(jpe?g|png|gif|svg)$/));
const reviewerPortraits = importAllAsObject(require.context('../../assets/images/reviewers', false, /\.(jpe?g|png|gif|svg)$/));

const Reviews = (props) => (
    <div className="reviews-container">
        {
            // TODO: correctly bind reviews to portraits
            reviews.map((review, idx) => <Review
                key={idx}
                reviewerPortrait={reviewerPortraits[generatePortraitKey(review, 'png')]}
                ratings={ratings}
                appearanceDelay={idx + 1}
                review={review}
                increaseScore={props.increaseScore}
            />)
        }
    </div>
);

export default Reviews;
