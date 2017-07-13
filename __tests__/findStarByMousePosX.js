require('jasmine-check').install();
import findStarByMousePosX from '../utils/findStarByMousePosX';

const width = 260;

const stars = [1, 2, 3, 4, 5].reduce(function (acc, curr) {
    acc.push({
        rating: curr,
        domRef: '.rating-' + curr,
        // left boundary included, right boundary excluded
        // boundaries: [ratingContainer.clientWidth / 5 * (curr - 1), ratingContainer.clientWidth / 5 * curr - 1]
        left: (width / 5) * (curr - 1), // left boundary included
        right: (width / 5) * curr - 1 // right boundary excluded
    });
    return acc;
}, []);

describe('findStarByMousePosX', () => {
    check.it(
        'should not return undefined',
        gen.posInt.suchThat(value => value <= width), {times: 1000},
        mousePosX => expect(findStarByMousePosX(mousePosX, stars)).not.toBeUndefined()
    );

    check.it(
        'should find something given that the input is within the width',
        gen.posInt.suchThat(value => value <= width), {times: 1000},
        mousePosX => expect(findStarByMousePosX(mousePosX, stars)).not.toBe(-1)
    );

    check.it(
        'should correctly find the right interval',
        gen.posInt.suchThat(value => value <= width), {times: 1000},
        mousePosX => expect(
            mousePosX >= stars[findStarByMousePosX(mousePosX, stars)].left &&
                mousePosX <= stars[findStarByMousePosX(mousePosX, stars)].right
        ).toBe(true)
    );
});