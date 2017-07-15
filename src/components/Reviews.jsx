import React, { Component } from 'react';

import Review from './Review';
import importAll from '../../utils/importAll';

const ratings = importAll(require.context('../../assets/images/stars', false, /\.(jpe?g|png|gif|svg)$/));
const reviewerPortraits = importAll(require.context('../../assets/images/reviewers', false, /\.(jpe?g|png|gif|svg)$/));

export default class Reviews extends Component {

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
