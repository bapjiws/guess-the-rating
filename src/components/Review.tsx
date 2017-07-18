import React, { Component } from 'react';

import findStarByMousePosX from '../../utils/findStarByMousePosX';

interface IReviewProps {
    reviewerPortrait: string // {[key: string]: string}
    ratings: Array<string>
    appearanceDelay: number
    review: IReview
    updateScore: (missed: boolean) => void
}

interface IReviewState {
    stars: Array<IRating>
    currentStar: number
}

export default class Review extends Component<IReviewProps, IReviewState> {
    constructor(props: IReviewProps) {
        super(props);
        this.state = {
            stars: [],
            currentStar: 0
        };
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
    }

    private domRefs: {
        reviewContainerRef?: HTMLDivElement;
        ratingContainerRef?: HTMLDivElement;
        realRatingRef?: HTMLImageElement;
    } = {};

    private ratingRefs: Array<HTMLImageElement> = new Array(this.props.ratings.length);
    private appearanceTimer: number;

    componentDidMount() {
        this.appearanceTimer = setTimeout(() => {
            if(this.domRefs.reviewContainerRef && this.domRefs.reviewContainerRef.style) {this.domRefs.reviewContainerRef.style.opacity = '1'};

            // console.log('this.ratingRefs:', this.ratingRefs);
            const ratingContainerWidth = this.domRefs.ratingContainerRef ? this.domRefs.ratingContainerRef.clientWidth : 0;
            // console.log('ratingContainerWidth:', ratingContainerWidth);
            let acc: Array<{ rating: number; domRef: any; left: number; right: number }> = [];
            const stars = [1, 2, 3, 4, 5].reduce((acc, curr, idx, array) => {
                acc.push({
                    rating: curr,
                    domRef: this.ratingRefs[idx],
                    left: ratingContainerWidth / array.length * (curr - 1), // left boundary included
                    right: curr ===  array.length ? ratingContainerWidth / array.length * curr: ratingContainerWidth / array.length * curr - 1 // right boundary excluded (except the very last interval)
                });
                return acc;
            }, acc);
            // console.log('stars:', stars);

            this.setState({ stars });
        }, 500 * this.props.appearanceDelay);
    }

    componentWillUnmount() {
        clearInterval(this.appearanceTimer);
    }

    handleMouseMove(event: any) {
        let newStar = findStarByMousePosX(event.nativeEvent.offsetX, this.state.stars);
        // console.log('posX, currentStar, newStar:', event.nativeEvent.offsetX, this.state.currentStar, newStar);
        if (newStar !== this.state.currentStar) {
            console.log('RESTACKING...');

            this.setState((prevState, props) => ({
                stars: prevState.stars.map(star => {
                    if (star.rating === (newStar + 1)) {
                        star.domRef.style.zIndex = '1';
                    } else {
                        star.domRef.style.zIndex = '0';
                    }
                    return star;
                }),
                currentStar: newStar
            }));
        }
    };

    handleClick(event: any) {
        this.handleMouseMove = (event: any): void => {};

        // Another option might be https://github.com/JedWatson/classnames
        if (this.domRefs.ratingContainerRef) {this.domRefs.ratingContainerRef.className += ' clicked'};
        if (this.domRefs.realRatingRef) {this.domRefs.realRatingRef.className += ' clicked'};
    };

    // See https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions#Detecting_the_completion_of_a_transition
    handleTransitionEnd(event: any) {
        this.props.updateScore(this.props.review.starRating !== this.state.currentStar+1);

        // Another option might be https://github.com/JedWatson/classnames
        if (+this.props.review.starRating !== this.state.currentStar+1) {
            if (this.domRefs.reviewContainerRef) {this.domRefs.reviewContainerRef.className += ' incorrect-guess'};
        } else {
            if (this.domRefs.reviewContainerRef) {this.domRefs.reviewContainerRef.className += ' correct-guess'};
        }
    }

    render() {
        const { reviewerPortrait, ratings, review: { fullName, location, reviewTitle, reviewBody, starRating } } = this.props;

        return <div
            ref={(ref:any) => this.domRefs.reviewContainerRef = ref}
            className="review-container"
        >
            <div className="review-header">
                <img className="review-portrait" src={reviewerPortrait} alt=""/>
                <div className="review-rating">
                    <div className="review-author">
                        {
                            location ? `${fullName} from ${location} gave:` :
                                `${fullName} gave:`
                        }
                    </div>
                    <div
                        ref={(ref:any) => this.domRefs.ratingContainerRef = ref}
                        className="rating-container"
                        onMouseMove={this.handleMouseMove}
                        onClick={this.handleClick}
                        onTransitionEnd={this.handleTransitionEnd}
                    >
                        {
                            ratings.map((rating, idx) => {
                                return <img
                                    key={idx}
                                    ref={(ref:any) => this.ratingRefs[idx] = ref}
                                    className={`rating-${idx + 1}`}
                                    src={rating}
                                />
                            })
                        }
                        <img
                            src={ratings[starRating-1]}
                            ref={(ref:any) => this.domRefs.realRatingRef = ref}
                            className="real-rating"
                        />
                    </div>
                </div>
            </div>
            <div className="review-title">{reviewTitle}</div>
            <div className="review-body">{reviewBody}</div>
        </div>
    }
};