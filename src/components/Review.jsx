import React, { Component } from 'react';

import findStarByMousePosX from '../../utils/findStarByMousePosX';

export default class Review extends Component {
    constructor(props) {
        super(props);

        this.ratingContainerRef = null;
        this.ratingRefs = Array(props.ratings.length);

        this.state = {
            stars: [],
            currentStar: 0
        };
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    componentDidMount() {
        // console.log('this.ratingRefs:', this.ratingRefs);
        const ratingContainerWidth = this.ratingContainerRef.clientWidth;
        // console.log('ratingContainerWidth:', ratingContainerWidth);
        const stars = [1, 2, 3, 4, 5].reduce((acc, curr, idx, array) => {
            acc.push({
                rating: curr,
                domRef: this.ratingRefs[idx],
                left: ratingContainerWidth / array.length * (curr - 1), // left boundary included
                right: curr ===  array.length ? ratingContainerWidth / array.length * curr: ratingContainerWidth / array.length * curr - 1 // right boundary excluded (except the very last interval)
            });
            return acc;
        }, []);
        console.log('stars:', stars);

        this.setState({ stars });
    }

    handleMouseMove(event) {
        let newStar = findStarByMousePosX(event.nativeEvent.offsetX, this.state.stars);
        // console.log('currentStar, newStar:', this.state.currentStar, newStar);
        if (newStar !== this.state.currentStar) {
            console.log('RESTACKING...');
            // const newStars = this.state.stars.slice();
            // newStars.forEach(star => {
            //     if (star.rating === (newStar + 1)) {
            //         star.domRef.style.zIndex = 1;
            //     } else {
            //         star.domRef.style.zIndex = 0;
            //     }
            // });
            this.setState({ stars: this.state.stars.map(star => {
                if (star.rating === (newStar + 1)) {
                    star.domRef.style.zIndex = 1;
                } else {
                    star.domRef.style.zIndex = 0;
                }
                return star;
            })});
            this.setState({ currentStar: newStar });
        }
    };

    render() {
        const { reviewerPortrait, ratings } = this.props;

        return <div className="review-container">
            <div className="review-header">
                <img className="review-portrait" src={reviewerPortrait} alt=""/>
                <div className="review-rating">
                    <div className="review-author">Erika Wolfe from Gothenburg, SE, gave:</div>
                    <div ref={ref => this.ratingContainerRef = ref} className="rating-container" onMouseMove={this.handleMouseMove}>
                        {
                            ratings.map((rating, idx) => {
                                return <img
                                    key={idx}
                                    ref={ref => this.ratingRefs[idx] = ref}
                                    className={`rating-${idx + 1}`}
                                    src={rating}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="review-title">"Nightmare experience - no product, no communication, no refund; improved by rapid
                resolution"
            </div>
            <div className="review-body">"In early 2012, I ordered a set of chairs from Infurn. I thought that by ordering
                in March, I would have what I needed by November, certainly. I wanted the perfect chairs for my house,
                and really did not NEED them before the annual Thanksgiving dinner (the only time of year I have a need
                for a whole lot of chairs at one time). I played it safe, I thought, by ordering so far in advance.
                Week after week, month after month, Infurn's website kept updating the status of the order so that the
                chairs' arrival would be further and further in the distant future. Finally when the week of
                Thanksgiving arrived, and I had had contact with their customer service in early November (and their
                only clueless reply was to say, 'We had manufacturing problems; let's hope the chairs arrive this week
                as scheduled.'), I still had no chairs, had to go out and buy some other chairs and still had no clue
                when the Infurn chairs might arrive.
                At some point I finally just requested a refund because Infurn could neither deliver my chairs nor give
                me a solid date about when I might receive them when I inquired about a delivery date. They finally
                offered me a refund - which I accepted on 14 December 2012."
            </div>
        </div>
    }
};