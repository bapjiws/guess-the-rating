import React, { Component } from 'react';

import portrait from '../../assets/images/reviewers/erika-wolfe.png';
import ratingOne from '../../assets/images/stars/1-star-260x48.png';
import ratingTwo from '../../assets/images/stars/2-stars-260x48.png';
import ratingThree from '../../assets/images/stars/3-stars-260x48.png';
import ratingFour from '../../assets/images/stars/4-stars-260x48.png';
import ratingFive from '../../assets/images/stars/5-stars-260x48.png';

export default class Reviews extends Component {

    render() {
        return <div className="review-container">
            <div className="review-header">
                <img className="review-portrait" src={portrait} alt=""/>
                <div className="review-rating">
                    <div className="review-author">Erika Wolfe from Gothenburg, SE, gave:</div>
                    <div className="rating-container">
                        <img className="rating-1" src={ratingOne}/>
                        <img className="rating-2" src={ratingTwo}/>
                        <img className="rating-3" src={ratingThree}/>
                        <img className="rating-4" src={ratingFour}/>
                        <img className="rating-5" src={ratingFive}/>
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
}