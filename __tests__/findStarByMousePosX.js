require('jasmine-check').install();
import findStarByMousePosX from '../utils/findStarByMousePosX';

const width = 260;

const stars = [1, 2, 3, 4, 5].reduce(function (acc, curr, _, array) {
    acc.push({
        rating: curr,
        domRef: '.rating-' + curr,
        left: width / array.length * (curr - 1), // left boundary included
        right: curr ===  array.length ? width / array.length * curr: width / array.length * curr - 1 // right boundary excluded (except the very last interval)
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