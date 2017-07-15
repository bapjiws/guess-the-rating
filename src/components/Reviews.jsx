import React, { Component } from 'react';

import Review from './Review';
import importAll from '../../utils/importAll';

const ratings = importAll(require.context('../../assets/images/stars', false, /\.(jpe?g|png|gif|svg)$/));
const reviewerPortraits = importAll(require.context('../../assets/images/reviewers', false, /\.(jpe?g|png|gif|svg)$/));

export default class Reviews extends Component {
    componentDidMount() {
        const reviews = document.querySelectorAll("div[class='review-container']");
        // console.log('reviews:', reviews);
        const reviewsLength = reviews.length;
        for (let i = 0; i <= reviewsLength-1; i++) {
            // console.log('review:', reviews[i]);
            (index => {
                setTimeout(function () {
                    // console.log('SHOWING:', reviews[index] );
                    reviews[index].style.opacity = 1;
                }, 100 * (index+1)); // TODO: set to 500 when finished debugging
            })(i);
        }
    }

    render() {
        return <div className="reviews-container">
            {
                reviewerPortraits.map((reviewerPortrait, idx) => <Review
                    key={idx}
                    reviewerPortrait={reviewerPortrait}
                    ratings={ratings}
                />)
            }
        </div>
    }
}
