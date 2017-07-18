"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('jasmine-check').install();
var findStarByMousePosX_1 = require("../utils/findStarByMousePosX");
var width = 260;
var stars = [1, 2, 3, 4, 5].reduce(function (acc, curr, _, array) {
    acc.push({
        rating: curr,
        domRef: '.rating-' + curr,
        left: width / array.length * (curr - 1),
        right: curr === array.length ? width / array.length * curr : width / array.length * curr - 1 // right boundary excluded (except the very last interval)
    });
    return acc;
}, []);
describe('findStarByMousePosX', function () {
    check.it('should not return undefined', gen.posInt.suchThat(function (value) { return value <= width; }), { times: 1000 }, function (mousePosX) { return expect(findStarByMousePosX_1.default(mousePosX, stars)).not.toBeUndefined(); });
    check.it('should find something given that the input is within the width', gen.posInt.suchThat(function (value) { return value <= width; }), { times: 1000 }, function (mousePosX) { return expect(findStarByMousePosX_1.default(mousePosX, stars)).not.toBe(-1); });
    check.it('should correctly find the right interval', gen.posInt.suchThat(function (value) { return value <= width; }), { times: 1000 }, function (mousePosX) { return expect(mousePosX >= stars[findStarByMousePosX_1.default(mousePosX, stars)].left &&
        mousePosX <= stars[findStarByMousePosX_1.default(mousePosX, stars)].right).toBe(true); });
});
